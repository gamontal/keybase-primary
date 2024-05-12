## ⚠️ This repository is no longer maintained.

# keybase-primary [![Build Status](https://travis-ci.org/gmontalvoriv/keybase-primary.svg)](https://travis-ci.org/gmontalvoriv/keybase-primary)

> Get the primary public key of a Keybase user

## Install

```
$ npm install --save keybase-primary
```


## Usage

```js
var kbpk = require('keybase-primary');

kbpk('max', function (public_key) {
	console.log(public_key);
	//=> '-----BEGIN PGP PUBLIC KEY BLOCK ... END PGP PUBLIC KEY BLOCK-----'
});
```
*`SELF-SIGNED PUBLIC KEY NOT FOUND` and `404` errors will return a `null` value*

## CLI

```
$ npm install --global keybase-primary
```

```
$ keybase-primary --help

  Usage
    $ keybase-primary <username>

  Example
    $ keybase-primary max
    -----BEGIN PGP PUBLIC KEY BLOCK ... END PGP PUBLIC KEY BLOCK-----
```


## Related

- [keybase-user](https://github.com/gmontalvoriv/keybase-user) - Get user info of a Keybase user

## License

MIT © [Gabriel Montalvo](http://gmontalvoriv.github.io/)
