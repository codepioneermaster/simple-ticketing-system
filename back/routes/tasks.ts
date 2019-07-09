import {Route} from "./route";
import {Controller} from "../controllers/controller";

export class Tasks implements Route {
    static readonly ROOT = '/tasks';

    controller: Controller;

    constructor(TaskController: Controller) {
        this.controller = TaskController;
    }

    initRoutes(app: any) {
        const TaskController = this.controller;

        app.get(Tasks.ROOT, function (request, response) {
            return TaskController.read(request, response);
        });

        app.get(Tasks.ROOT + '/:id', function (request, response) {
            return TaskController.readById(request, response);
        });

        app.post(Tasks.ROOT, function (request, response) {
            return TaskController.create(request, response);
        });

        app.post(Tasks.ROOT + '/:taskId', function (request, response) {
            return TaskController.update(request, response);
        });
    }
}
