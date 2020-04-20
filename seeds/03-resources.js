exports.seed = function (knex, Promise) {
  return knex("resources").insert([{
    resource_name: "laptio",

    resource_description: "HP laptop"
  },

  {
    resource_name: "money",

    resource_description: "American currency"
  },

  {
    resource_name: "phone",

    resource_description: "Iphone X"
  },

  {
    resource_name: "paper",

    resource_description: "white copy paper"
  },

  {
    resource_name: "phone charger cord",

    resource_description: "white plugin charger cord"
  },

  {
    resource_name: "pencils",

    resource_description: "number 2 pencils"
  },

  {
    resource_name: "pens",

    resource_description: "black, red, blue pens"
  }
  ]);
};  