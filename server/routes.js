let routes = require('./models/Routes');
// let db = require('./database');
// db.connect('localhost', 28015, '{admin_pass}', 'doMore');


//Pages Routes
routes.addRoute('GET','/', (request,reply) => {
	var data = {
		title: 'Yoti - WebApp'
	};
	return reply.view('index', data);
});


//Resource Routes
routes.addRoute('GET','/dist/{filename}.js', (request,reply) => {
	reply.file(`./client/dist/${request.params.filename}.js`);
});
//Resource Routes
routes.addRoute('GET','/images/{filename}', (request,reply) => {
	reply.file(`./client/images/${request.params.filename}`);
});
//Resource Routes
routes.addRoute('GET','/fonts/{filename}', (request,reply) => {
	reply.file(`./client/fonts/${request.params.filename}`);
});


module.exports = routes.getRoutes();