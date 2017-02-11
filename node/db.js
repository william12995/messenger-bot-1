var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var utils = require('./utils');
var debug = require('debug')('messenger-bot-1:server');
var config = require('./config.json');
var colors = require('colors');

var fB = new Schema(
    {
        id : String
    }
);



mongoose.model('fb', fB);
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb, function (err) {
    if (err) {
        console.log("[ERROR]".red+"Couldn't connect to mongodb: " + config.mongodb + " .");
        console.log("[ERROR]".red+"Please check if your setting in 'config.json' is right.");
        console.log("[ERROR]".red+"Or, if the mongod is running.");
        throw err;
    } else {
        debug('Connected to MongoDB server.');
    }
});
