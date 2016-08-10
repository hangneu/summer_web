(function(){
	angular
		.module("WebAppMaker")
		.controller("WebsiteListController",WebsiteListController);
		function WebsiteListController($routeParams,WebsiteService){
			var vm = this;
			var websites = null;
			function init(){
				var userId = $routeParams.userId;
				vm.websites =WebsiteService.findWebsitesForUser(userId);
				console.log("good");
			}
			init();
		}
})();