(function(){
	angular
		.module("WebAppMaker")
		// .controller("LoginController",LoginController)
		.controller("ProfileController",ProfileController);
		
		function ProfileController($routeParams,$location,UserService){
			var vm = this;
			vm.updateUser = updateUser;
			vm.unregister = unregister;

			var id = $routeParams["id"];
			var index = -1;
			var user = null;
			// console.log(id);
			
			
			init();

			function unregister($){
				UserService
					.deleteUser(id)
					.then(
						function(response){
							$location.url("/login");
						},
						function(error){
							vm.error = "Unable to remove user";
						});
			}
			function updateUser(){
				UserService
						.updateUser(id,vm.user)
						.then(
							function(response){
								vm.success = "Updated successfully";
						},
							function(error){
								vm.error = "Unable to update user";
							});
			}
			function init(){
				UserService
					.findUserById(id)
					.then(function(response){
						vm.user = response.data;
					});
			}
		}





// 		function LoginController($location){
// 			var vm = this;
// 			vm.login = function(username,password){
// 				for (var i in users ){
// 					if(users[i].username === username && users[i].password === password){
// 						var id = users[i]._id;
// 						$location.url("/profile/" + id);
// 					}else{
// 						vm.error = "User not found!!!!";
// 					}
// 				}	
// 			};
// 		}
		
 })
();








