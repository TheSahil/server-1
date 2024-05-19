import express from 'express';
import https from 'https';
import fs from 'fs';
import * as sql from './src/util/sql.js';
import constants from './src/constants.js';

const app = express();
const port = 3000;

// Read SSL certificate and key
const sslOptions = {
  key: fs.readFileSync('SSL/key.pem'),
  cert: fs.readFileSync('SSL/cert.pem')
};

app.get('/', (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`Connection established from client ${clientIp}`);
  res.send(`Welcome to my server! Your IP is ${clientIp}`);
});

app.get('/all', async (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`req received /all from client ${clientIp}`)
  sql.executeQuery(constants.SQL.GET_ALL)
  .then(results => {
    res.status(200).send(results);
  })
  .catch(error => {
    res.status(400).send(error.message);
  });
});

https.createServer(sslOptions, app).listen(port, () => {
  console.log(`HTTPS server is running on port ${port}`);
});
