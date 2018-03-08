// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

'use strict'

let jsJS = (a) => {

    a = a.map((item) => {
        return item.toLowerCase();
    });

    let checkForJS = (x) => {
        return x.includes('js')
    }

    a = a.filter(checkForJS);

    return a;

}
console.log(jsJS(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));