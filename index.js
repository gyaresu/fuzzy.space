var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.start(function () {
  console.log('Server running at: ', server.info.uri);
});


var getConfig = {
  handler: function (request, reply) {
             reply('<html><body><h3>fuzzy space</h3> \n <a href="https://twitter.com/gyaresu">@gyaresu</a></body></html>');
           },
};

var testConfig = {
  handler: function (request, reply) {
             reply('test');
           },
};

var routes = [
  { path: '/',      method: 'GET', config: getConfig},
  { path: '/test',  method: 'GET', config: testConfig},
  { path: '/keybase.txt',
    method: 'GET',
    handler: function (req, res) {
      res.file('./keybase.txt');
      }
  }
];

server.route(routes);
server.start();
