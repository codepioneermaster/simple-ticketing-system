export class Tasks {
    app: any;

    constructor(public express: any) {
        this.app = express;
    }

    initRoutes() {
        this.app.get('/routes', (req, res) => res.send({
            message: 'Hello World!',
        }));
        this.app.get('/', (req, res) => res.send({
            message: 'Hello World from root!',
        }));
    }
}
