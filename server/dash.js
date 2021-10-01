'use strict';

const rethinkdbdash = require('rethinkdbdash');
const config = require(__dirname+"/config.js");
//var r = rethinkdbdash({db: 'webapp'});
const r = rethinkdbdash(config.rethinkdb);
module.exports = r;

