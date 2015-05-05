'use strict';

var RageReporter = function (baseReporterDecorator) {
    baseReporterDecorator(this);

    var SUCCESS = '.',
        FAIL = 'F',
        RAGE = 'U',
        NOK = '\nCK\n',
        OK = '\nOK\n',
        MAX_FAIL = 7,
        failuresCount = 0,
        recentResult = SUCCESS;

    this.specSuccess = function () {
        if (failuresCount < MAX_FAIL) {
            recentResult = SUCCESS;
        } else {
            recentResult = RAGE;
        }
        this.write(recentResult);
    };

    this.specFailure = function () {
        failuresCount++;
        if (failuresCount < MAX_FAIL || recentResult === SUCCESS) {
            recentResult = FAIL;
        } else {
            recentResult = RAGE;
        }
        this.write(recentResult);
    };

    this.onRunComplete = function () {
        if (failuresCount > 0) {
            this.write(NOK);
        } else {
            this.write(OK);
        }
    };
};

RageReporter.$inject = ['baseReporterDecorator'];

module.exports = {
    'reporter:rage': ['type', RageReporter]
};
