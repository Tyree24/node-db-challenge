const express = require('express');
const helmet = require('helmet');

const server = express();
const ProjectRouter = require('./projects/project-router');
const ResourcesRouter = require('./resources/resource-router');

const TaskRouter = require('./tasks/task-router');

server.use(helmet());
server.use(express.json());
server.use('/api/projects', ProjectRouter);

server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TaskRouter);

server.get('/', (req, res) => {
  res.send('<h1>Sprint DB Challenge</h1>');
});

module.exports = server;