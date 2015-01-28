var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.start(function () {
  console.log('Server running at: ', server.info.uri);
});


var getConfig = {
  handler: function (request, reply) {
             reply("fuzzy.space: " + server.info.uri);
           },
}

var testConfig = {
  handler: function (request, reply) {
             reply("test");
           },
}

var routes = [
  { path: '/',      method: 'GET', config: getConfig},
  { path: '/test',  method: 'GET', config: testConfig}
]

server.route(routes);
server.start();
