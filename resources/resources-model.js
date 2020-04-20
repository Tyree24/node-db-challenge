const db = require('../data/db-config');

module.exports = {
  findResource,
  findResourceById,
  addResource
}

function findResource() {
  return db('resources');
}

function findResourceById(id) {
  return db('resources')
    .where({ id });
}

function addResource(resource) {
  return db('resources')
    .insert(resource);
} 