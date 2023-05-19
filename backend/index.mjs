import express from 'express';
import { constants } from '../shared/constants.mjs';

const app = express();
const port = constants.BACKEND_PORT || 3000; // Use the port from constants or fallback to 3000

app.get('/', (req, res) => {
  res.send(constants.HELLO_WORLD);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
