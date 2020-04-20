const express = require('express');
const server = express();
const ProjectRouter = require('./projects/project-router');
const TaskRouter = require('./tasks/task-router');

server.use(express.json());
server.use('/api/projects', ProjectRouter);

// server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', TaskRouter);

server.get('/', (req, res) => {
  res.send('<h1>Sprint DB Challenge</h1>');
});

module.exports = server;