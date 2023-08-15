import { Router } from 'express';
import { getTasks, postTask, deteleTask, markTask } from '../controllers/tasks.controller.js';
const TaskRouter = Router();

TaskRouter.get('/tasks', getTasks);
TaskRouter.post('/tasks', postTask);
TaskRouter.delete('/tasks/:idTask', deteleTask);
TaskRouter.patch('/tasks/:idTask', markTask);
export default TaskRouter;
