// sample karma.conf.js

'use strict';

module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        reporters: ['rage'],
        files: [
            {pattern: '*-spec.js', included: true}
        ],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            require('../index.js')
        ]
    });
};
