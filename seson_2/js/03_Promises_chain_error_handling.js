const cart = ['Kurta', 'shirt', 'T-shirt'];

// createOrder, 
// ProceedToPayment,
// showOrderSummary,
// updateWallet

createOrder(cart)
    .then(function(orderId) {          // resolve
        console.log(orderId);
        return orderId;
    })
    .catch(function(err) {                    // reject
        console.log(err.message);
    })
    .then(function(orderId) {
        return ProceedToPayment(orderId)
    })
    .then(function(paymentInfo) {
         console.log(paymentInfo);
    })
    .catch(function(err) {                    // reject
        console.log(err.message);
    })
    .then(function(orderId) {
        console.log('No matter what happens, I will definietly is called');
    })
    

/// Producer :

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        // createOrder
        // validateCart
        // orderId
        if(!validiteCart(cart)) {
            const err = new Error('Cart is not valid');
            reject(err);
        }
        // Logic of CreateOrder :
        const orderId = '12345';
        if(orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 5000)
        } 
    });

    return pr;
}


function ProceedToPayment(orderId) {
    /// 
    return new Promise(function(resolve, reject) {
        resolve('Payment Successfull');
    })

}

function validiteCart(cart) {
    return false;
}





// createOrder(cart, function(orderId) {
//     ProceedToPayment(orderId, function(paymentInfo) {
//         showOrderSummary(paymentInfo, function() {
//             updateWalletBalance();
//         });
//     });
// }); 