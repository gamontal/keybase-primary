#!/usr/bin/env node

'use strict';
var meow = require('meow');
var kbpk = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ keybase-primary <username>',
		'',
		'Example',
		'  $ keybase-primary max',
		'  -----BEGIN PGP PUBLIC KEY BLOCK ... END PGP PUBLIC KEY BLOCK-----',
	]
});

var username = cli.input[0];

if (!username) {
	console.error('Please supply a Keybase username');
	process.exit(1);
}

kbpk(username, function (public_key) {
	if (public_key === null) {
		console.error('key not found');
		process.exit(1);
	}

	console.log(public_key);
});