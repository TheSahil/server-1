import express from 'express';
import * as sql from './src/util/sql.js';
import constants from './src/constants.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`Connection established from client ${clientIp}`);
  res.send(`Welcome to my server! Your IP is ${clientIp}`);
});

app.get('/all', async (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`req recieved /all from client ${clientIp}`)
  sql.executeQuery(constants.SQL.GET_ALL)
  .then(results => {
    res.status(200).send(results);
  })
  .catch(error => {
    res.status(400).send(error.message);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
