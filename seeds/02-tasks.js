exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      project_id: 1,
      task_id: 1,
      task_name: 'Step 1',
      descriptions: "This project is to help feed the needy"
    }
  ])

};