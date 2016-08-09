(function(){
	angular
		.module("WebAppMaker")
		.controller("LoginController",LoginController)
		.controller("ProfileController",ProfileController);
		var users = [
{_id: "123", username: "alice",    password: "alice",    firstName: "Alice", email:"shangneu1992@gmail.com",  lastName: "Wonder"  },
{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",  email:"shangneu1992@gmail.com",    lastName: "Marley"  },
{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", email:"shangneu1992@gmail.com",  lastName: "Garcia"  },
{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", email:"shangneu1992@gmail.com",    lastName: "Annunzi" }
];
		function ProfileController($routeParams){
			var vm = this;
			var id = $routeParams["id"];
			console.log(id);
			for (var i in users){
				if(users[i]._id === id){
					vm.user = users[i];
				}
			}
		}




		function LoginController($location){
			var vm = this;
			vm.login = function(username,password){
				for (var i in users ){
					if(users[i].username === username && users[i].password === password){
						var id = users[i]._id;
						$location.url("/profile/" + id);
					}else{
						vm.error = "User not found!!!!";
					}
				}	
			};
		}
		
})();