//Defines routes for the application linked to controllers/callback functions

const userlistctrl = require('../controllers/listUsers.js');

module.exports = function(app){
	
app.get('/getUsers', userlistctrl.getUsers);

// 404 
app.use(function(req, res, next) {
	res.status(404);
	res.send('<h1>404 - Not Found</h1>')
});
// 500 
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.send('<h1>500 - Server Error</h1>')
});

}