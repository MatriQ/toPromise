/**
 * Created by matri on 2016/12/22.
 */
'use strict';

const should = require ('should');
require ('./');


let func1 = function (a, b, cb) {
    cb (null, a===b);
};

let func2 = function (a, cb) {
    if (a > 0) {
        cb (null, Math.sqrt (a));
    }
    else {
        cb (Error ('a is less than 0'));
    }
};

describe ('convert fucn to promise', function () {
    describe ('1 should not equal to 2', function () {
        it ('return false', function () {
            func1.promise (1, 2)
                .then (function (result) {
                    result.should.be.false ();
                })
                .catch (function (e) {
                    console.error (e);
                });
        });
    });
    describe ('1 should equal to 2', function () {
        it ('return true', function () {
            func1.promise (1, 1)
                .then (function (result) {
                    result.should.be.true ();
                })
                .catch (function (e) {
                    console.error (e);
                });
        });
    });
    describe ('sqrt of 9 should be 3', function () {
        it ('return 3', function () {
            func2.promise (9)
                .then (function (result) {
                    result.should.be.equal (3);
                })
                .catch (function (e) {
                    console.error (e);
                });
        });
    });
    describe ('sqrt of -1 should be throw error', function () {
        it ('shoud not be exec', function () {
            func2.promise (-1)
                .then (function (result) {
                    should.fail ();
                })
                .catch (function (e) {
                    console.error (e);
                    (e != null).should.be.true ();
                });
        });
    });
});