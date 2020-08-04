import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsControllers';

const routes = express.Router();

const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connections', connectionsControllers.create);

export default routes;
