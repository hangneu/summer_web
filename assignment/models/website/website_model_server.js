module.exports = function(){
	var mongoose = require("mongoose");
	var WebsiteSchema = require("./website-schema_server.js")();
	var Website = mongoose.model("Webiste",WebsiteSchema);

	var api = {
		findAllWebsitesForUser:findAllWebsitesForUser,
		createWebsite: createWebsite,
		findWebsiteById:findWebsiteById
	};
	return api;



	function findWebsiteById(websiteId){
		return Website.find({_id:websiteId});
	}

	function createWebsite(userId,website){
		website._user = userId;
		return Website.create(website);
	}

	function findAllWebsitesForUser(userId){
		return Website.find({_user:userId});
	}
}