const db = require('../data/db-config');

module.exports = {
  findTasks,
  findTasksById,
  addTask
}

function findTasks() {
  return db('tasks');
}

function findTasksById(id) {
  return db('tasks')
    .where({ id })
    .first();
}

function addTask(task) {
  return db('tasks')
    .insert(task);

} 