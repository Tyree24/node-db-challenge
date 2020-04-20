const db = require('../data/db-config');

module.exports = {
  findProjects,
  findProjectById,
  addProject
}

function findProjects() {
  return db('projects');
}

function findProjectById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function addProject(project) {
  return db('projects')
    .insert(project);

}
