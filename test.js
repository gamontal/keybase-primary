'use strict';
var test = require('ava');
var kbpk = require('./');

test(function (t) {
  t.plan(1);

  kbpk('chris', function (public_key) {
    t.assert(typeof public_key === 'string');
  });
});
