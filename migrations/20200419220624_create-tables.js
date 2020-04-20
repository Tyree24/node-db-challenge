
exports.up = function (knex) {
  return knex.project
    .createTable('project', tbl => {
      tbl.text('project_name', 128).unique().notNullable();
    })
    .createTable('task', tbl => {
      tbl.text('task_name', 128).unique().notNullable();
    })
    .createTable('resource', tbl => {
      tbl.text('resource_name', 128).unique().notNullable();
    })

};

exports.down = function (knex) {

  return knex.project.dropTableIfExists('task').dropTableIfExists('project');

};
