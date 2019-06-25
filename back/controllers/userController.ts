import {Controller} from "./controller";

export class UserController implements Controller {
    userModel: any;

    constructor(model: any) {
        this.userModel = model;
    }

    getUsers() {
    }

    createUser() {
    }
}
