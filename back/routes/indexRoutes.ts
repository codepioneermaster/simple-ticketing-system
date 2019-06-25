import {Tasks} from "./tasks";
import {Users} from "./users";
import {Route} from "./route";
import {UserController} from "../controllers/userController";
import {UserModel} from "../models/userModel";

export class IndexRoutes {
    routes: Array<Route>;
    app: any;

    constructor(app) {
        this.app = app;
        this.routes = [new Tasks(), new Users(new UserController(UserModel))];
    }

    init() {
        for (let route of this.routes) {
            route.initRoutes(this.app);
        }
    }
}