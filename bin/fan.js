#!/usr/bin/env node
// var pkg = require('../compiled.js');
var pkg = require('../source.js');

var param = process.argv[2] ? process.argv[2] : '';

pkg(param);
