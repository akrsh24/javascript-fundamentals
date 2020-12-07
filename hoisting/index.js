
//Hoisting
//1. Here, we will see how hoisting actually works.
//2. It's an application of execution contexts.

//--------------------
function number(num) {
    return num;
}

console.log(a);
var a = 5;
console.log(a);

// Here, according to execution context, memory creation phase will be executed at first, which will define and initialise a=undefined. And when we define it to a number(5), it get updated.
// Hoisting is an application of execution context, where we see how execution context works.

// var variables hold undefined without any error.
// let variables hold undefined but gives reference error, as we cannot access any variable without initialisation.
let b = 2;
console.log(b);

//--------------------


//--------------------
function square(num) {
    // console.log("Args->",args);
    var args = num;
    console.log("Args->",args);
}

square(5);
console.log(args);

//--------------------

