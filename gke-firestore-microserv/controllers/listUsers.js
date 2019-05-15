//Callback function to route - /getScrips
var users = require('../models/users.js');

var getUsers = function(req, res){
	users.getUsers(function(dataSnapShot) {
		if (!dataSnapShot){
			console.log("Nothing to return");
			res.status(500);
		}
		else {
			resp = {}
			dataSnapShot.docs.forEach(doc => {
					resp[doc.id] = doc.data()
			})
			res.send(JSON.stringify(resp))
		}
	 })
};

module.exports = {
		getUsers: getUsers
}