module.exports = function(){
	var api = {
		createUser:createUser
	};
	return api;
	function createUser(user){
		var a = "good";
		console.log(user);
		console.log(a)
	}
};