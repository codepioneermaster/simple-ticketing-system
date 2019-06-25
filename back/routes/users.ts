import {Route} from "./route";
import {Controller} from "../controllers/controller";

export class Users implements Route {
    static readonly ROOT = '/users';

    controller: Controller;

    constructor(UserController: Controller) {
        this.controller = UserController;
    }

    initRoutes(app: any) {
        const UserController = this.controller;

        app.get(Users.ROOT, function (request, response) {
            return UserController.read(request, response);
        });
    }
}
