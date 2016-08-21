

module.exports = function(){
	var mongoose = require("mongoose");
	var WebsiteSchema = mongoose.Schema({
		_user:{type:mongoose.Schema.ObjectId,ref:"User"},
		name: String,
		description: String,
		dataCreated:{type:Date,default:Date.now},
	},{collection:"website"});
	return WebsiteSchema;
}