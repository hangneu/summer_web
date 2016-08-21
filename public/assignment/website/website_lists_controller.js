(function(){
	angular
		.module("WebAppMaker")
		.controller("WebsiteListController",WebsiteListController);
		function WebsiteListController($routeParams,WebsiteService){
			var vm = this;
			var websites = null;
			vm.useId = $routeParams.userId;
			function init(){
				var userId = $routeParams.userId;
				WebsiteService
					.findWebsitesForUser(userId)
					.then(function(response){
						vm.websites = response.data;
						console.log("test");
					});
			}
			init();
		}
})();