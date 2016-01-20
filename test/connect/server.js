/* eslint-disable */

var http = require('http');
var connect = require('connect');
var prism = require('connect-prism');
var serveStatic = require('serve-static');

var mode = process.argv[2] || 'mocks';
console.log('Starting record/mocking test server with mode ' + mode);

prism.create({
  name: 'rest',
  context: '/rest',
  host: 'localhost',
  port: 8081,
  mode: mode,
  mocksPath: __dirname + '/mocks'
});

var app = connect()
  .use(prism.middleware)
  .use(serveStatic('public'))
  .use(function(req, res){
    res.end('hello world\n');
  })

http.createServer(app).listen(3000);
