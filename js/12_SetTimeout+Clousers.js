function x() {

    for (var i=1; i<=5; i++) {
        function close(i) {
            setTimeout(function() {
                console.log(i);
            }, i * 2000);
        }
        close(i);
    }
    console.log('Namaste JavaScript');
}
x();