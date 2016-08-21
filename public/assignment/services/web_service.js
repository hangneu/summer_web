(function(){
	angular.
		module("WebAppMaker")
		.factory("WebsiteService",WebsiteService);
		
		function WebsiteService($http){
			
			var api = {
				findWebsitesForUser: findWebsitesForUser,
				findWebsiteById: findWebsiteById,
				createWebsite:createWebsite
			};
			return api;
			function findWebsitesForUser(userId){
				return $http.get("/api/user/"+userId+"/website");
			}

			function findWebsiteById(websiteId){
				return $http.get("/api/website/"+websiteId);
			}

			function createWebsite(developerId,name,desc){
				var website = {
					name: name,
					description:desc
				};
				console.log(developerId);
				return $http.post("/api/user/"+developerId+"/website",website);
			}
		}
})();