// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var archive = require('../helpers/archive-helpers');

var workerUrlList = [];


exports.htmlfetcher = function() {
  archive.readListOfUrls(function(urls) {
    // workerUrlList.forEach(function(index) {
    //   archive.isUrlinList(index,)
    // })
    urls.forEach(function(url) {
      if (!workerUrlList.includes(url)) {
        workerUrlList.push(url);
      }
    });
  });

  archive.downloadUrls(workerUrlList);
};
