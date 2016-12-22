# toPromise
convert a function to promise

 [![NPM version](https://img.shields.io/npm/v/is-promise.svg)](https://www.npmjs.org/package/toppromise)

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