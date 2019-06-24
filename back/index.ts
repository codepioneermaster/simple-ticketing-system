import * as express from 'express';
import { Request, Response } from 'express';
import {IndexRoutes} from './routes/indexRoutes';

const app = express();
const {
    PORT = 3000,
} = process.env;

const routes = new IndexRoutes(app);

routes.init();

app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
});