exports.seed = function (knex) {
  return knex('projects')
    .truncate()
    .then(function () {
      return knex('projects').insert([
        {
          project_name: 'Feed the Needy',
          project_description: 'find food',
          project_completed: 'false'
        },

        {
          project_name: 'Travel to the Moon',
          project_description: 'Find ways to travel',
          project_completed: 'true'
        }
      ]);
    })

};