module.exports = function(app){
	require("./services/user-service_server.js")(app);
	users = [
{_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];
};