(function(){
	angular
		.module("WebAppMaker")
		.config(Config);
			function Config($routeProvider){
				$routeProvider	
					.when("/login",{
						templateUrl:"/assignment/user/login.html"
					})
					.when("/register",{
						templateUrl:"/assignment/user/register.html"
					})
					.when("/profile",{
						templateUrl:"/assignment/user/profile.html"
					});
			}
})();