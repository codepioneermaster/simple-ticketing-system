import {Route} from "./route";
import {TaskModel} from "./../models/taskModel";
import {UserModel} from "./../models/userModel";

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
