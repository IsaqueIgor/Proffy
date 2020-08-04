import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
// require('dotenv').config({ path: '../.env' });

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'hello World' });
});

app.listen(process.env.SERVER_PORT);
