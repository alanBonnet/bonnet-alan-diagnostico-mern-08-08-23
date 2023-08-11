/* eslint-disable indent */
import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import ConnectDB from './src/db/db.js';
// Routes
import TaskRouter from './src/routes/tasks.routes.js';

const App = express();
ConnectDB({ uri: 'mongodb://localhost:27017/dbTasks' });
App.use(cors());
App.use(morgan('tiny'));
App.use(json());

const PORT = 3000;
const routeBase = `http://localhost:${PORT}/`;

// Routes
App.use(TaskRouter);

App.listen(PORT, () => {
    console.clear();
    console.log(routeBase);
});

export default routeBase;
