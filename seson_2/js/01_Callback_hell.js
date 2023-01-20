
console.log('Namaste');

setTimeout(function() {
    console.log('JavaScript');
}, 5000)

console.log('season2');


// ===============================================================================================

const cart = ['pents', 'shirt', 'kurta', 'indowestern'];

api.createOrder(cart, function () {

    api.proceedToPayment(function () {

        api.showOrderSummary(function () {

            api.UpdateWallet()

        })

    })               

})




