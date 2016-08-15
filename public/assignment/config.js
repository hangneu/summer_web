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
					.when("/flickr",{
						templateUrl:"/assignment/widget/widget-flickr-search.html",
						controller:"FlickImageSearchController",
						controllerAs:"model"
					})
					.when("/register",{
						templateUrl:"/assignment/user/register.html",
						controller:"RegisterController",
						controllerAs : "model"
					})
					.when("/profile/:id",{
						templateUrl:"/assignment/user/profile.html",
						controller:"ProfileController",
						controllerAs : "model"
					})
					.when("/user/:userId/website",{
						templateUrl:"/assignment/website/website-lists.html",
						controller:"WebsiteListController",
						controllerAs : "model"
					})
					.when("/user/:userId/website/:websiteId",{
						templateUrl:"/assignment/website/website-edit.html",
						controller:"EditWebsiteController",
						controllerAs : "model"
					})
					.when("/user/:userId/website/:websiteId/page/:pageId/widget",{
						templateUrl:"/assignment/widget/widget-list.html",
						controller:"WidgetListController",
						controllerAs : "model"
					})
					.when("/user/:userId/website/:websiteId/page/:pageId/widget/new",{
						templateUrl:"/assignment/widget/widget-chooser.html",
						controller:"WidgetChooserController",
						controllerAs : "model"
					})
					.otherwise({
						redirectTo:"/login"
					});
			}
})();
// /assignment/widget/widget-chooser.html