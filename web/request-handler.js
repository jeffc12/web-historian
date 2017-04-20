var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  fs.readFile(path.join(__dirname, '/public/index.html'), 'utf-8', function(err, data) {

    if (err) {
      res.writeHead(500);
      res.end('Server Error!', err);
      return;
    }

    res.writeHead(200, httpHelpers.headers);
    res.end(data); 
  });
};
