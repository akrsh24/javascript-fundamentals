
//execution-context 

//1. Memory creation phase
//2. Code execution phase
//3. Each execution context creation pushes one in call stack.
//4. Call stack maintains the execution of execution context
//5. Variables/named function constants are initialised as undefined , where function are whole definition itself.


let a = 2;

function square(args) {
    var num = args * args;
    return num;
}

var b = square(a);
var c = square(5);
