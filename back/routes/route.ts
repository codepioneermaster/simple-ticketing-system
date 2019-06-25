import {Controller} from "../controllers/controller";

export interface Route {
    constructor(controller: Controller);

    initRoutes(app: any): void;
}