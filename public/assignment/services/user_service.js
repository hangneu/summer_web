(function(){
	angular
		.module("WebAppMaker")
		.factory("UserService",UserService);

	function UserService(){
		var users = [
			{_id: "123", username: "alice",    password: "alice",    firstName: "Alice", email:"shangneu1992@gmail.com",  lastName: "Wonder"  },
			{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",  email:"shangneu1992@gmail.com",    lastName: "Marley"  },
			{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", email:"shangneu1992@gmail.com",  lastName: "Garcia"  },
			{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", email:"shangneu1992@gmail.com",    lastName: "Annunzi" }
		];
		var api = {
			// createUser：createUser,
			findUserByUsernameAndPassword: findUserByUsernameAndPassword
		};
		return api;
		// function createUser(){

		// }
		function findUserByUsernameAndPassword(username,password){
			for (var i in users ){
					if(users[i].username === username && users[i].password === password){
						// var id = users[i]._id;
						// $location.url("/profile/" + id);
						return users[i];
					}
				// 	else{
				// 		vm.error = "User not found!!!!";
				// }
			}	
			return null;
		}
	}
})
();