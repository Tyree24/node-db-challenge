
exports.up = function (knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('project_name').notNullable();
      tbl.text('project_description');
      tbl.boolean('completed').notNullable().defaultTo(false);
    })

    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.integer('task_id').unsigned().notNullable().references("id").inTable("projects");
      tbl.text('task_description').unique().notNullable();
      tbl.text('task_notes');
      tbl.integer('project_id').unsigned().notNullable();
    })

    .createTable('resources', tbl => {
      tbl.increments();
      tbl.text('resource_name', 128).unique().notNullable();
      tbl.text('resource_description');
    })

};

exports.down = function (knex) {

  return knex.project.dropTableIfExists('task').dropTableIfExists('project');

};
