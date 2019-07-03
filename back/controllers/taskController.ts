import {Controller} from "./controller";
import {TaskModel} from "./../models/taskModel";
import {UserModel} from "../models/userModel";

export class TaskController implements Controller {
    read(request, response) {
        TaskModel.findAll({
            where: request.query,
            attributes: ['id', 'summary', 'description', 'priority', 'status'],
            order: [['id', 'ASC']],
            include: [UserModel]
        })
            .then((tickets) => response.status(200).header('Content-Type', 'application/json').json({tickets}))
            .catch(err => response.status(500).json({err: ['oops', err]}));
    }

    create(request, response) {
        TaskModel.create<TaskModel>(request.body)
            .then((task) => response.status(200).json({task}))
            .catch(err => response.status(500).json({err: ['oops', err]}));
    }

    update(request, response) {
        let updatedInfo = request.body;
        updatedInfo.id = request.params.taskId;

        TaskModel.upsert<TaskModel>(updatedInfo, {returning: true})
            .then((isInserted) => response.status(200).json({isInserted}))
            .catch(err => response.status(500).json({err: ['oops', err]}));
    }
}
