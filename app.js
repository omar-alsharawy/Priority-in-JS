let one = function() {
    setTimeout(function() {
        console.log("This is the first statement");
    }, 200);
}

let two = function() {
    setTimeout(function() {
        console.log("This is the second statement");
    }, 100);
}

let three = function() {
    console.log("This is the third statement");
}

one();  //  3
two();  //  2
three(); // 1