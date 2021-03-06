module.exports = function(app,models){

	var userModel = models.userModel;

	users = [
		{_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
		{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
		{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
		{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
		];

	app.post("/api/user",createUser);
	app.get("/api/user",getUsers);
	app.get("/api/user/:userId",findUserById);
	app.put("/api/user/:userId",updateUser);
	app.delete("/api/user/:userId",deleteUser);

	function deleteUser(req,res){
		var id = req.params.userId;
		userModel
			.deleteUser(id)
			.then(function(stats){
				console.log(stats);
				res.send(200);
			},
			function(error){
				res.statusCode(404).send(error);
			}
			)
		// for (var i in users){
		// 	if (users[i]._id === id){
		// 		users.splice(i,1);
		// 		res.send(200);
		// 		return;
		// 	}
		// }
		// res.send(400);
	}

	function updateUser(req,res){
		var id = req.params.userId;
		var newUser = req.body;

		userModel
			.updateUser(id,newUser)
			.then(function(stats){
				console.log(stats);
			},
			function(error){
				res.statusCode(404).send(error);
			});
		// for (var i in users){
		// 	if(users[i]._id === id){
		// 		users[i].firstName = newUser.firstName;
		// 		users[i].lastName = newUser.lastName;
		// 		res.send(202);
		// 		return;
		// 	}
		// }
		// 	res.send(400);
	}


	function createUser(req,res){
		var user = req.body;
		console.log(user);
		userModel
			.createUser(user)
			.then(
				function(user){
					console.log("good");
					res.send(user);
				},
				function(error){
					res.statusCode(400).send(error);
				});
		
			// .then(
				// 	function(user){
				// 		cnosole.log(user);
						
				// 		console.log("good");
				// 	});
		


		// user._id = (new Date()).getTime()+"";
		// users.push(user);
		// res.send(user);
		// userModel
		// 		.createUser(user)
		// 		.then(function(user){
		// 			console.log(user);
		// 			res.json(user);
		// 		},
		// 		function(error){
		// 			res.statusCode(400).send(error);
		// 		});
	}

	function getUsers(req,res){
		var username = req.query['username'];
		var password = req.query['password'];
		console.log(username);
		console.log(password);
		if(username && password){
			findUserByCredentials(username,password,res);
		}else if(username ){
			findUserByUsername(username,res);
		}else{
			res.send(users);
		}
	}
	function findUserById(req,res){
		var id = req.params.userId;
		userModel
			.findUserById(id)
			.then(function(user){
				res.send(user);
			},
			function(error){
				res.statusCode(404).send(error);
			});
		// for (var i in users){
		// 	if (users[i]._id === id){
		// 		res.send(users[i]);
		// 		return;
		// 	}
		// }
		// res.send({});
	}
	function findUserByUsername(username,res){
		for (var i in users){
			if(users[i].username === username){
				res.send(users[i]);
				return;
			}
		}
		res.send({});
	}
	function findUserByCredentials(username,password,res){

		userModel
			.findUserByCredentials(username,password)
			.then(function(user){
				res.json(user);
			},
			function(error){
				res.statusCode(404).send(err);
			});

		// for (var i in users){
		// 	if(users[i].username === username && users[i].password === password){
		// 		res.send(users[i]);
		// 		return;
		// 	}
		// }
		// res.send({});
	}

};









