const radius = [3, 1, 2, 4];

// DRY way 
const area = function (radius) {
    return Math.PI * radius * radius
};

const circumference = function (radius) {
    return 2 * Math.PI * radius
}

const diameter = function (radius) {
    return 2 * radius
}

// Array.prototype.calculate  = function (logic) {
//     const output = [];
//     for (let i=0; i<this.length; i++) {
//         output.push(logic(this[i]));
//     }
//     return output;
// };

const calculate  = function (radius, logic) {
    const output = [];
    for (let i=0; i<radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter)); 

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));  