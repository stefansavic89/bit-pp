// var i = 0;

// while (i < 5) {
//     console.log("js");
//     // i++;
//     if (i == 3) {
//         break;
//     }
//     i++;
// }

// while (true) {

// if (i==10) {
//     break;
// }
// console.log(i);

// i++;

// }

// for (i=0; i<10; i++) {

// if (i==4) {
//     continue;
//     // continue preskace slucaj 
// }

// console.log(i);

// }

var total=0;
var data = [undefined, 1, 2, 3, undefined, 4];

for (i=0; i<data.length; i++) {

    if (!data[i]) {
        continue;
    }

    total= total + data[i];
}

console.log(total);