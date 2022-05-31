import 'reflect-metadata';
import './infra/database';
import express from 'express';
import cors from 'cors';
import { routes } from './infra/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.APP_PORT, () =>
  console.log(`🚀 http://localhost:${process.env.APP_PORT}`),
);
