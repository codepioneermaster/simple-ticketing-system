import {Route} from "./route";

export class Users implements Route{
    initRoutes(app: any) {
        app.get('/users', (req, res) => res.send({
            message: 'Hello World from users endpoint',
        }));
    }
}
