import {Tasks} from "./tasks";
import {Users} from "./users";
import {Route} from "./route";
import {UserController} from "../controllers/userController";
import {TaskController} from "../controllers/taskController";

export class IndexRoutes {
    routes: Array<Route>;
    app: any;

    constructor(app) {
        this.app = app;
        this.routes = [new Tasks(new TaskController()), new Users(new UserController())];
    }

    init() {
        for (let route of this.routes) {
            route.initRoutes(this.app);
        }
    }
}