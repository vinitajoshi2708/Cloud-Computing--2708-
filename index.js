const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello Vinita');
});

const server = http.createServer(app);

server.listen(8000, () => {
  console.log('Server running on port 8000');
});