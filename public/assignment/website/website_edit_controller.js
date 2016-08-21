(function(){
	angular
		.module("WebAppMaker")
		.controller("EditWebsiteController",EditWebsiteController);

		function EditWebsiteController($routeParams,WebsiteService){
			var vm = this;
			vm.userId = $routeParams.userId;
			vm.websiteId = $routeParams.websiteId;
			function init(){
				WebsiteService
						.findWebsiteById(vm.websiteId)
						.then(function(response){
							vm.website = response.data;
							vm.name = response.data[0].name;
							console.log(vm.name);
							console.log(response.data);
							// console.log(vm.website);
						});
			}
			console.log("lp");
			init();
			console.log("success");
			// console.log(vm.website);
		}
})();