module.exports = function(){

	var mongoose = require("mongoose");
	mongoose.connect('mongodb://localhost/cs5610summer');

	var models = {
		userModel: require("./user/user_model_server.js")(),
		websiteModel: require("./website/website_model_server.js")()
	};
	return models;
};