// What is callback function in JS 

    // setTimeout(function () {
    //     console.log('Timer');
    // }, 3000);

    // function a(b) {
    //     console.log('x');
    //     b();
    // }

    // a(function b() {                                   // Callback Function
    //     console.log('y');
    // })

// Js is syncronus and single-threaded language 

// Blocking the main threaded 

// Power of callbacks ?

// Deep about Event listner 

// Clouser demo with Event listner 

// Scope demo with Event listner 

// Garbage Collection & removeEventlistner 

function attachEventListeners() {
    let count = 0;
    document.getElementById('clickme')
    .addEventListener('click',function xyz() { 
        console.log('Button Cliked', ++count);
    })
}
attachEventListeners();     
