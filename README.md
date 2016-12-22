# toPromise
convert a function to promise

 [![Build Status](https://img.shields.io/travis/then/is-promise/master.svg)](https://travis-ci.org/then/is-promise)
 [![Dependency Status](https://img.shields.io/david/then/is-promise.svg)](https://david-dm.org/then/is-promise)
 [![NPM version](https://img.shields.io/npm/v/is-promise.svg)](https://www.npmjs.org/package/is-promise)

## Installation

    $ npm install toPromise


## API

```javascript
require('toPromise');


let func = function (a, cb) {
    if (a > 0) {
        cb (null, Math.sqrt (a));
    }
    else {
        cb (Error ('a is less than 0'));
    }
};

func.promise(a,b)
    .then(function(result){
        //TODO:...
    })
    .catch(function(e){
        //TODO:...
    });

```

## License

  MIT