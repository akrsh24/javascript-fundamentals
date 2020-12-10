
//execution-context 

//1. Memory creation phase
//2. Code execution phase
//3. Each execution context creation pushes one in call stack.
//4. Call stack maintains the execution of execution context
//5. Variables/named function constants are initialised as undefined , where function are whole definition itself.


var a = 2;

function getTwiceTheNumber(num) {
    a = num * 2;
    console.log(a);
    return a;
}

var b = 5;

getTwiceTheNumber(a);
getTwiceTheNumber(5);
