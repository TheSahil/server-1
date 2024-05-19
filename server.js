const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`Connection established from ${clientIp}`);
  res.send(`Welcome to my server! Your IP is ${clientIp}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
