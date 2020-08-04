import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import routes from './routes';

dotenv.config();
// require('dotenv').config({ path: '../.env' });

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.SERVER_PORT);
