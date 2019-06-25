import {Route} from "./route";
import {Task} from "./../models/task";
import {User} from "./../models/user";

export class Tasks implements Route {
    initRoutes(app: any) {
        app.get('/tasks', function (req, res) {
            // Task.findAll({include: [User]}).then((task) => {
            //     console.log(task);
            // }, (error) => {
            //     console.log(error);
            // });
        });
    }
}
