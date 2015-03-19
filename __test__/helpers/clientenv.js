var jsdom = require ('jsdom'),
    jade = require('jade'),
    fs = require('fs'),
    path = require('path');

module.exports.setup = setup = function(callback) {

    if(typeof window != 'undefined') return callback(window);
    // Setup a jsdom env and globally expose window along with other libraries
    var templateFilename = path.resolve(__dirname, '../../index.html');
    var html = fs.readFileSync(templateFilename).toString() ;

    jsdom.env({
        html: html,
        done: function(errs, window) {
            global.window = window;
            global.document =  window.document ;
            global._ = require('../../vendor/underscore.js');
            global.Backbone = require('../../vendor/backbone.js');
            global.Backbone.$ = global.$ = require('../../vendor/jquery.js');
            global.sinon = require('sinon');
            global.path = require('path');
            global.fs = require('fs');
            global.BP = {} ;
            global.BP.Model = {};
            global.BP.View = {};
            global.BP.Collection = {};
            global.BP.Router = {};
            global.navigator = {  browser: 'foo'   };
            callback();
        }
    });
}
