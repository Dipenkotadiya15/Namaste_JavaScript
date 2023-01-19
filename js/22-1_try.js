const arr = [5, 1, 3, 2, 6];

// <------------------------------------------ MAP in JS ------------------------------------------>

// Double = [10, 2, 6, 4, 12];

// Tripple = [15, 3, 9, 6, 18];

// Binary = ['101', '1', '11', '10', '110'];

// function double(x) {
//     return x * 2;
// }
// function tripple(x) {
//     return x * 3;
// }
// function binary(x) {
//     return x.toString(2);
// }

// const output = arr.map(double);
// const output = arr.map(tripple);
// const output = arr.map(binary);
// console.log(output);

// <--------------------- 1st way --------------------->
// const output = arr.map(function binary(x) {
//     return x.toString(2);
// });
// console.log(output);

// <--------------------- 2nd way --------------------->
// const output = arr.map((x) =>  x.toString(2));
// const output = arr.map((x) => {
//     return x.toString(2);
// });
// console.log(output);



// <------------------------------------------ Filter in JS ------------------------------------------>

// function isOdd(x) {
//     return x % 2;
// }
// function isEven(x) {
//     return x % 2 === 0;
//     // return x <= 3;
// }
 
// const output = arr.filter(isOdd);
// const output = arr.filter(isEven);
// console.log(output);



// <------------------------------------------ Reduce in JS ------------------------------------------>

// Sum or Max

// function findSum() {
//     let sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//         sum = sum +  arr[index];         
//     }
//     return max;
// }
// console.log(findSum(arr));

// const output = arr.reduce(function(acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0);
// console.log(output);


function findMax() {
    let max = 0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > max) {
            max = arr[index];   
        }          
    }
    return max;
}
console.log(findMax(arr));

const output = arr.reduce(function(max, curr) {
    if(curr > max) {
        max = curr
    }
    return max;
}, 0);
console.log(output);