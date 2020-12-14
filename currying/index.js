//Method Currying in JS
/*  When we reuse a general function for different usecases , 
    this is called as method currying.
*/

// By bind method

let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);
multiplyByTwo(4);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(3);
multiplyByThree(4);


// By closure

let multiplies = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multipliesByTwo = multiplies(2);
multipliesByTwo(10);
multipliesByTwo(20);

let multipliesByThree = multiplies(3);
multipliesByThree(10);
multipliesByThree(20);


/*
What we can see in this, is method currying is the reusing of the method defined for our usecase. 
If we define this as a general method, now we are able to reuse it by bind(returns a function) , closure(returns a function)
*/