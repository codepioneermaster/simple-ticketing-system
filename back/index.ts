import * as express from 'express';
import {IndexRoutes} from './routes/indexRoutes';
import {sequelize} from "./models";
import {Task} from "./models/task";
import {User} from "./models/user";

const app = express();
const {
    PORT = 3000,
} = process.env;

sequelize.addModels([Task, User]);

const routes = new IndexRoutes(app);

routes.init();

app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
});