const express = require('express');
const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

module.exports = server;