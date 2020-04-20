exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    {
      completed: 'false'
    },
    {
      project_name: 'Travel to the Moon',
      project_description: 'Find ways to travel',
      completed: 'true'
    }
  ]);
};
