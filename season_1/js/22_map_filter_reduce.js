const user = [
    { firstname:'dipen', lastname:'kotadiya', age:21 },
    { firstname:'donald', lastname:'trump', age:69 },
    { firstname:'elon', lastname:'musk', age:51 },
    { firstname:'keyur', lastname:'vekariya', age:21 },
];

//  <------------------------------------------ MAP in JS ------------------------------------------>

// List of full names
// ['dipen kotadiya', 'donald trump', 'elon musk', 'keyur vekariya']

// const result = user.map(x => x.firstname + ' ' + x.lastname);
// console.log(result);



//  <------------------------------------------ Reduce in JS ------------------------------------------>

// { 21:2,  51:1, 69:1 }

// const result = user.reduce(function(acc, curr) {
//     if(acc[curr.age]){
//         acc[curr.age] =  ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})
// console.log(result);



//  <------------------------------------------ Filter in JS ------------------------------------------>

// ['dipen', 'keyur']
const result = user.filter((x) => x.age < 30)
.map((x) => x.firstname);
console.log(result);

