'use strict';

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

module.exports = function(username, cb) {
  if (typeof username !== 'string') {
    throw new Error('username required');
  }
  
  var httpGet = function(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
  };

  var url = 'https://keybase.io/' + encodeURIComponent(username) + '/key.asc';
  var res = httpGet(url);
  
  if ((res === 'SELF-SIGNED PUBLIC KEY NOT FOUND') || (res.substring(0, 3) === '404')) {
    cb(null);
  } else {
    cb(res);
  }
};
