let routes = require('./models/Routes');
// let db = require('./database');
// db.connect('localhost', 28015, '{admin_pass}', 'doMore');


//Pages Routes
routes.addRoute('GET','/', (request,reply) => {
	var data = {
		title: 'This is Index!',
		message: 'Hello, World. You crazy handlebars layout'
	};
	return reply.view('index', data);
});


//Resource Routes
routes.addRoute('GET','/dist/{filename}.js', (request,reply) => {
	reply.file(`./client/dist/${request.params.filename}.js`);
});


module.exports = routes.getRoutes();