import {Tasks} from "./tasks";
import {Users} from "./users";
import {Route} from "./route";

export class IndexRoutes {
    routes: Array<Route>;
    app: any;

    constructor(app) {
        this.app = app;
        this.routes = [new Tasks(), new Users()];
    }

    init() {
        for (let route of this.routes) {
            route.initRoutes(this.app);
        }
    }
}