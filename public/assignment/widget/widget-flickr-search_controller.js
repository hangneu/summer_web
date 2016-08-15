(function(){
	angular
		.module("WebAppMaker")
		.controller("FlickImageSearchController",FlickImageSearchController);

		function FlickImageSearchController(FlickrService){
			var vm = this;
			vm.searchPhotos = searchPhotos;

			function searchPhotos(searchText){
				FlickrService
					.searchPhotos(searchText)
					.then(function(response){
						data = response.data.replace("jsonFlickrApi(","");
			            data = data.substring(0,data.length - 1);
			            data = JSON.parse(data);
			            vm.photos = data.photos;
					});
				// cnosole.log(searchPhotos);
			}
		}
})();