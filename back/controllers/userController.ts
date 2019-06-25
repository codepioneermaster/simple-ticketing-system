import {Controller} from "./controller";
import {UserModel} from "./../models/userModel";

export class UserController implements Controller {
    userModel: any;

    constructor(model: any) {
        this.userModel = model;
    }

    read(request, response) {
        this.userModel.findAll({attributes: ['id', 'name']})
            .then((users) => response.status(200).json({users}))
            .catch(err => response.status(500).json({err: ['oops', err]}));
    }

    create(request, response) {
        UserModel.create<UserModel>(request.query)
            .then((user) => response.status(200).json({user}))
            .catch(err => response.status(500).json({err: ['oops', err]}));
    }

    update() {

    }
}
