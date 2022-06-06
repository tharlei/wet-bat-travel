import { Router } from 'express';

import { QuoteController } from '../controllers/QuoteController';
import { TransportController } from '../controllers/TransportController';

import { StoreQuoteRequest } from '../controllers/requests/StoreQuoteRequest';
import { TokenMiddleware } from '../middlewares/TokenMiddleware';

const routes = Router();

routes.use('/', TokenMiddleware);
routes.get('/transports', new TransportController().index);
routes.post('/quotes', StoreQuoteRequest, new QuoteController().store);

export { routes };
