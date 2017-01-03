/**
 * Created by matri on 2016/12/22.
 */
'use strict';

Function.prototype.promise = function (sender) {
    let args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push (arguments[i]);
    }
    
    return new Promise ((resolve, reject) => {
        args.push (function (error, result) {
            if (!!error) {
                reject (error);
            }
            else {
                resolve (result);
            }
        });
        try {
            this.apply (sender, args);
        }
        catch (e) {
            reject (e);
        }
    });
};