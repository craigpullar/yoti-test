const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: 8000 
});

server.register(require('vision'), (err) => {

    if (err) {
        console.log("Failed to load vision.");
    }
});

server.views({  
    engines: {
        html: require('handlebars')
    },
    path: './client/views',
    layoutPath: './client/layouts',
    layout: 'default',
    //helpersPath: 'views/helpers',
    partialsPath: './client/partials'
});

// create your routes, currently it's just one
var routes = [  
{
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
            // Render the view with the custom greeting
            var data = {
                title: 'This is Index!',
                message: 'Hello, World. You crazy handlebars layout'
            };

            return reply.view('index', data);
        }
    }
    ];

    server.route(routes);


    server.start((err) => {
        if (!err) console.log("Server running at :" + server.info.uri);
        else console.log(err); 
    });