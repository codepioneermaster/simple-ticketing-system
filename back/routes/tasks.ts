import {Route} from "./route";

export class Tasks implements Route{
    initRoutes(app: any) {
        app.get('/routes', (req, res) => res.send({
            message: 'Hello World!',
        }));
    }
}
