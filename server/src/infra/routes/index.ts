import { Router } from 'express';

import { ExampleController } from '../controllers/ExampleController';

const routes = Router();

routes.get('/examples', new ExampleController().index);

export { routes };
