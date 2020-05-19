exports.seed = function (knex) {

  const users = [
    {
      id:1,
      username: "admin",
      password: "keepitsecret,keepitsafe.",
      department:"accounting"
    },
    { id:2,
      username: "me",
      password: "changethepass",
      department:"marketing"
    },
    {
      id:3,
      username: "nobody",
      password: "hasnorole",
      department: "IT"
    }
  ];

  return knex("users").insert(users);
};
