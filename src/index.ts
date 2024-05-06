import express from 'express';

import './config/dbconfig/dbConnect';
import { getAllUsers, registerDummyUser } from './controllers/userController';

const app = express();
const port = 5000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/register', registerDummyUser);
app.get('/users', getAllUsers);

app.listen(port, () => {
  console.log(` App listening on port ${port}`);
});
