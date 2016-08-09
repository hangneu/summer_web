(function(){
	angular
		.module("WebAppMaker")
		.config(Config);
			function Config($routeProvider){
				$routeProvider	
					.when("/login",{
						templateUrl:"/assignment/user/login.html",
						controller:"LoginController",
						controllerAs : "model"
					})
					.when("/register",{
						templateUrl:"/assignment/user/register.html"
					})
					.when("/profile/:id",{
						templateUrl:"/assignment/user/profile.html",
						controller:"ProfileController",
						controllerAs : "model"
					});
			}
})();