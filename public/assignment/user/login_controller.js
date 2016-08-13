(function(){
	angular
		.module("WebAppMaker")
		.controller("LoginController",LoginController);
		// .controller("ProfileController",ProfileController);
		
		// function ProfileController($routeParams){
		// 	var vm = this;
		// 	vm.updateUser = updateUser;

		// 	var id = $routeParams["id"];
		// 	var index = -1;
		// 	// console.log(id);
			
			
		// 	init();
		// 	function updateUser(){
		// 		vm.success = "User successfully update";
		// 		users[index].username = vm.user.username;
		// 		users[index].firstName = vm.user.firstName;
		// 		users[index].lastName = vm.user.lastName;
		// 		users[index].email = vm.user.email;
		// 		console.log("success");
		// 	}
		// 	function init(){
		// 		for (var i in users){
		// 			if(users[i]._id === id){
		// 				vm.user = angular.copy(users[i]);
		// 				index = i;
		// 			}
		// 		}
		// 	}
		// }





		function LoginController($location,UserService){
			var vm = this;
			vm.login = function(username,password){
				UserService
					.findUserByUsernameAndPassword(username,password)
					.then(function(response){
						console.log(response);
						var user = response.data;
						if(user.username != undefined){							
							var id = user._id;
							$location.url("/profile/"+id);
						}
						else{
							vm.error = "User not found";
						}
					});
				// if (user){
				// 	var id = user._id;
				// 	$location.url("/profile/"+id);
				// }
				// else{
				// 	vm.error = "User not found";
				// }
			};
		}
		
})();