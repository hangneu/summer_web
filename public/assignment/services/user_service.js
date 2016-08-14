(function(){
	angular
		.module("WebAppMaker")
		.factory("UserService",UserService);

	function UserService($http){
		// var users = [
		// 	{_id: "123", username: "alice",    password: "alice",    firstName: "Alice", email:"shangneu1992@gmail.com",  lastName: "Wonder"  },
		// 	{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",  email:"shangneu1992@gmail.com",    lastName: "Marley"  },
		// 	{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", email:"shangneu1992@gmail.com",  lastName: "Garcia"  },
		// 	{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", email:"shangneu1992@gmail.com",    lastName: "Annunzi" }
		// ];
		var api = {
			createUser: createUser,
			findUserByUsernameAndPassword: findUserByUsernameAndPassword,
			findUserById: findUserById,
			updateUser: updateUser,
			deleteUser: deleteUser
		};
		return api;
		function createUser(username,password){
			var user = {
				username:username,
				password:password
			};
			 return $http.post("/api/user",user);
		}
		function deleteUser(id){}
		function updateUser(id,newUser){
			for (var i in users){
				if(users[i]._id === id){
					users[i].firstName = newUser.firstName;
					users[i].lastName = newUser.lastName;
					users[i].email = newUser.email;
					console.log("su");
					return true;
				}
			}
			return false;
		}
		function findUserByUsernameAndPassword(username,password){
			var url = "/api/user?username="+username+"&&password="+password;
			console.log("first line");
			return $http.get(url);
		}

		function findUserById(id){
			var url = "/api/user/"+id;
			return $http.get(url);
			// for (var i in users){
			// 	if(users[i]._id === id){
			// 		return users[i];
			// 	}
			// }
			// return null;
		}
	}
})
();