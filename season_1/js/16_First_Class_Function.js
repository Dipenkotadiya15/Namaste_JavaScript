// Function Statement is also known as Function Declaration
    function a() {
        console.log('a called');
    }
      
// Function Expression   
    var b = function () {
        console.log('b called');
    }

    a();
    b();

// Anonymus Function
    // function () {

    // }

// Named Function Expression
    // var c = function xyz() {
    //     console.log('c called');
    //     console.log(xyz);
    // }
    // c();
    // xyz();

// Difference between Parameters & Arguments ?
    var d = function (para1, para2) {                         // Parameters
        console.log('d called');
    }
    d(1, 2);                                                  // Arguments

// First Class Function - Ability to be used like values
// First Class Citizens 
    var e = function (para3) {
        return function abc() {
          
        }
    }
    console.log(e());


// Arrow Function