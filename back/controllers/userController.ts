import {Controller} from "./controller";
import {UserModel} from "./../models/userModel";

export class UserController implements Controller {
    read(request, response) {
        UserModel.findAll({attributes: ['id', 'name']})
            .then((users) => response.status(200).json(users))
            .catch(err => response.status(500).json({err: ['oops', err]}));
    }

    create(request, response) {
        UserModel.create<UserModel>(request.query)
            .then((user) => response.status(200).json({user}))
            .catch(err => response.status(500).json({err: ['oops', err]}));
    }

    readById(request: Request, response: Response) {
    }

    update(request, response) {
        let updatedInfo = request.query;
        updatedInfo.id = request.params.userId;

        UserModel.upsert<UserModel>(updatedInfo, {returning: true})
            .then((isInserted) => response.status(200).json({isInserted}))
            .catch(err => response.status(500).json({err: ['oops', err]}));
    }
}
