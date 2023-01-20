const cart = ['Pent', 'Shirt', 'kurta'];

createOrder(cart, function(orderId) {
    ProceedToPayment(orderId, function(paymentInfo) {
        showOrderSummary(paymentInfo, function() {
            updateWalletBalance();
        });
    });
});  


// Promise Way :
createOrder(cart)
    .then(function (orderId) { 
        return ProceedToPayment(orderId)
    })
    .then(function (paymentInfo) { 
        return showOrderSummary(paymentInfo)
    })
    .then(function (paymentInfo) { 
        return updateWalletBalance(paymentInfo)
    })

// Arrow Function Way :
createOrder(cart)
    .then((orderId) => ProceedToPayment(orderId))
    .then((paymentInfo) => showOrderSummary(paymentInfo))
    .then((paymentInfo) => updateWalletBalance(paymentInfo));



// const Promise = createOrder(cart);

// Promise.then(function(orderId) {
//     ProceedToPayment(orderId);
// })





// const GITHUB_API = 'https://api.github.com/users/Dipenkotadiya15'

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function(data) {
//     console.log(data);
// });