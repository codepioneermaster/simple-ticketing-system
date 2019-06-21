const express = require('express');
// const Tasks = require('routes/tasks');
import Tasks from 'routes/tasks';

const app = express();
const port = 3000;
//
const tasksRoutes = new Tasks(app);
tasksRoutes.initRoutes();

// clear

app.listen(port, () => console.log(`App listening on port ${port}!`));