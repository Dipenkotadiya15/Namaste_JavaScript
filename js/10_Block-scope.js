
// if(true) {
//     // Compound statment
//     var a = 10;
//     console.log(a);
// }

// const c = 100;
// function x() {
//     const c = 30;
//     console.log(c);
// }
// x();
// console.log(c);

// Inlegal shadowing  
var a = 200;
{
    let a = 20;
    console.log(a);
}
console.log(a);

