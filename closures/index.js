//when a function has the access to its lexical env even after its scope has ended, it's closure.

function x() {
    console.log("closures");
    function y() {
        console.log("Inside inner function");
    }
    return y;
}

(x())();   // inner function is returned , which is incrementally called again.


