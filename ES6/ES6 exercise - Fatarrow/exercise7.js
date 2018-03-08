// Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: 45, 553

'use strict'

let filterFive = (...args) => {

    // check for integer
    let checkForInteger = (n) => {
        return Number.isInteger(n)
    }

    let b = args.filter(checkForInteger);

    // convert integers to string
    b = b.map((item) => {

        return item + '';
    });

    // check if 5 string
    let checkForFive = (x) => {
        return x.includes('5')
    }

    b = b.filter(checkForFive);

    return b;

}
console.log(filterFive(23, 11.5, 9, 'abc', 45, 28, 553));