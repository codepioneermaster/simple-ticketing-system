class Tasks {
    constructor(app) {
        this.app = app;
    }

    initRoutes() {
        this.app.get('/routes', (req, res) => res.send('Hello World!'));
        this.app.get('/', (req, res) => res.send('Hello World from root'));
    }
}

export default Tasks;