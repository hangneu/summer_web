(function(){
	angular
		.module("WebAppMaker")
		.controller("WebsiteListController",WebsiteListController);
		function WebsiteListController($routeParams,WebsiteService){
			var vm = this;
			var websites = null;
			var userId = $routeParams.userId;
			vm.websites =WebsiteService.findWebsitesForUser(userId);
			console.log("good");
		}
})();