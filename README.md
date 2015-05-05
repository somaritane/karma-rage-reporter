# karma-rage-reporter
Karma test reporter plugin inspired by [PEP712](http://www.revsys.com/blog/2011/oct/20/pep712-proposal-make-unittest2-more-accurate/)

## Installation

The easiest way is to install the package as dev dependency
```sh
npm install karma-rage-reporter --save-dev
```

## Configuration

```js
// sample karma.conf.js:
module.exports = function(config) {
    config.set({
        reporters: ['rage'],
        plugins: [
            'karma-rage-reporter'
        ]
    });
};
```

or you can overload existing karma configuration using karma CLI argument e.g.:
```sh
karma start --reporters rage
```
