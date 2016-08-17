module.exports = function(){

	var mongoose = require("mongoose");
	var UserSchema = require("./user-scheme_server.js")();
	var User = mongoose.model("User",UserSchema);

	var api = {
		createUser:createUser,
		findUserById:findUserById,
		findUserByCredentials:findUserByCredentials,
		deleteUser:deleteUser,
		updateUser:updateUser
	};
	return api;
	function createUser(user){
		return User.create(user);
	}
	function findUserById(userId){
		return User.findById(userId);
	}

	function findUserByCredentials(username,password){
		return User.findOne({username:username,password:password});
	}

	function deleteUser(userId){
		return User.remove({_id:userId});
	}

	function updateUser(userId,user){
		delete user._id;
		return User.update({_id:userId},{
						$set:{
							firstName:user.firstName,
							lastName:user.lastName
						}
					});
	}
};