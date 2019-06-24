import * as express from 'express';
import { Request, Response } from 'express';
import {Tasks} from './routes/tasks';

const app = express();
const {
    PORT = 3000,
} = process.env;

const tasks = new Tasks(app);

tasks.initRoutes();

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'hello world',
    });
});
app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
});