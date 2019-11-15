import { Router } from 'express';
import multer from 'multer';

// Controllers
import CityController from './app/controllers/CityController';
import FileController from './app/controllers/FileController';
import JobController from './app/controllers/JobController';
import SessionController from './app/controllers/SessionController';
import StateController from './app/controllers/StateController';
import UserController from './app/controllers/UserController';
import authMiddlewares from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/states', StateController.index);
routes.post('/states', StateController.store);

routes.get('/state/:state_id/citys', CityController.index);
routes.post('/state/:state_id/citys', CityController.store);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddlewares);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
