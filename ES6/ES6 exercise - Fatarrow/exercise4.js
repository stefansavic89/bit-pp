// Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]

'use strict'

let allEven = (a) => {

    let even = (x) => {
        return x % 2 == 0 && x != 0;
    }

    a = a.filter(even);

    return a;
}
console.log(allEven([6, 11, 9, 0, 3]));