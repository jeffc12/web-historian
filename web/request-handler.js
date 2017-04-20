var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

  if (req.method === 'GET') {

    // if data.length
    res.writeHead(200, httpHelpers.headers);
    if (req.url !== '/') {
      // return content
      fs.readFile(archive.paths.archivedSites + req.url, 'utf8', function(err, data) {
        if (data) {
          res.end(data);
        } else {
          res.writeHead(404, httpHelpers.headers);
          res.end();
        }
      }); 
    } else {
      fs.readFile(path.join(__dirname, '/public/index.html'), 'utf-8', function(err, data) {

        if (err) {
          res.writeHead(500);
          res.end('Server Error!', err);
          return;
        }
        res.end(data); 
      });
    }
  }
  if (req.method === 'POST') {

    httpHelpers.collectData(req, function(data) {
      archive.addUrlToList(data.slice(4), () => {
        res.writeHead(302, httpHelpers.headers); 
        res.end();
      });
      
    });
  } 
};
