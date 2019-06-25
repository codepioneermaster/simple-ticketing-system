import {Route} from "./route";
import {Controller} from "../controllers/controller";
import {UserModel} from "../models/userModel";

export class Users implements Route {
    controller: Controller;

    constructor(UserController: Controller) {
        this.controller = UserController;
    }

    initRoutes(app: any) {
        app.get('/users', (req, res) => res.send({
            message: 'Hello World from users endpoint',
        }));
    }
}
