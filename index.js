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
    var RAGE_GUY =
        '\nFFFFFFFFFFFF██████▀▀▀███████FFFFFFFFFFFF' +
        '\nFFFFFFFF▄▄▄██▀▀░░░░░▄███▀▀▀█FFFFFFFFFFFF' +
        '\nFFFFFFF█████▄░░▀▄▄░░███▀░░▄██FFFFFFFFFFF' +
        '\nFFFFFFF████▀██▄░░░░░██░░░░█░████FFFFUUUU' +
        '\nUUUUUUU███░░░░▀▄▄▄▄░██░░░░▀▀▀░░▀█UUUUUUU' +
        '\nUUUUUU██▀▀█░░░░████▀▀▀█▄░░░░░░░██UUUUUUU' +
        '\nUUUUU██░▀▀▀░░░░█░░▄▄▄▄▄██▄░░░░░▄█UUUUUUU' +
        '\nUUUUU██░░░░░░░▄▀▄▀░█░▄█▄██▀▀▄▄▀▀█▄UUUUUU' +
        '\nUUUUU███░░░░░▄▀█░█▄████████▄░░░░██UUUUUU' +
        '\nUUUUU██░▀▀▀▀▀░▄██████████████░░░██UUUUUU' +
        '\nUUUUU██▄░░░░░░██████▀▀▀░░▀████░░██UUUUUU' +
        '\nUUUUUU██░░░░▄▀████▀░░░░░░▄░▀███░██UUUUUU' +
        '\nUUUUUUU██░░░█████░░▄░░░░▄█░░▀██▄██UUUUUU' +
        '\nUUUUUUUU██░░░███░░░░▀▀▄▄▄▄░▄░█▀███UUUUUU' +
        '\nUUUUUUUUU███▄███▄▄▄▄███▄▄█▄▄█████UUUUUUU' +
        '\n';

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
            this.write(RAGE_GUY);
        } else {
            this.write(OK);
        }
    };
};

RageReporter.$inject = ['baseReporterDecorator'];

module.exports = {
    'reporter:rage': ['type', RageReporter]
};
