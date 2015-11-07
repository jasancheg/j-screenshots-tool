/* jshint -W069 */ //disable dot notation on Gruntfile

'use strict';

/**
 * @description Important variables and params used:
 *
 * @var {[NODE_ENV]} used by node process for define targets [devtools|development|staging]
 * @var {[GRUNT_ENV | target:@param]} used by grunt for define targets [server|electron|distribution]
 */

// Some Utility functions
var GruntHelper =  require('./gruntHelper.js');

// #Globbing
module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates'
    });

    var packagejson = require('./package.json');

    // Configurable paths and options for the application
    var appConfig = {
        app: packagejson['clientAppPath'] || 'app/client',
        serverApp: packagejson['serverAppPath'] || 'app/server',
        dist: 'dist/' + packagejson['clientAppPath'],
        distServer: 'dist/' + packagejson['serverAppPath']
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: appConfig
    });

};
