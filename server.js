import express from 'express';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import router from './src/routes/router.js';

const app = express();
app.disable('x-powered-by');
const port = 3000;
app.use(cors());

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

app.use('/api', router);

https.createServer(sslOptions, app).listen(port, () => {
  console.log(`HTTPS server is running on port ${port}`);
});
