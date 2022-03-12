const express = require('express');
const dataRouter = require('./routers/dataRouter');
const logger = require('./middlewares/logger');

const app = express();
const port = 5000;

app.use(express.json());
//app.use(logger);
app.use('/data', dataRouter);

app.get('/', (req, res) => {
  res.send('<h1> This is Home Page </h1>');
});

app.listen(port, () => {
  console.log(`online server localhost:${port}`);
});
