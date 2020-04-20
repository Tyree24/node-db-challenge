const express = require('express');
const Task = require('./task-model');
const router = express.Router();

router.get('/', (req, res) => {
  Task.findTasks()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to find task' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Task.findTasksById(id)
    .then(tasks => {
      if (tasks) {
        res.json(tasks)
      } else {
        res.status(404).json({ message: 'Failed to get task by id' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get task' })
    })
})

router.post('/', (req, res) => {
  const TaskData = req.body;
  Task.addTask(TaskData)
    .then(newTask => {
      res.status(201).json(newTask);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to add new task' })
    })
})

module.exports = router;