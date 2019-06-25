import * as express from 'express';
import {IndexRoutes} from './routes/indexRoutes';
import {sequelize} from "./models";
import {TaskModel} from "./models/taskModel";
import {UserModel} from "./models/userModel";

const app = express();
const {
    PORT = 3000,
} = process.env;

sequelize.addModels([TaskModel, UserModel]);

const routes = new IndexRoutes(app);

routes.init();

app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
});