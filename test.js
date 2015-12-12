'use strict';
var test = require('ava');
var kbpk = require('./');

test(function (t) {
	t.plan(1);

	kbpk('chris', function (public_key) {
		t.assert(public_key.length === 7493);
	});
});