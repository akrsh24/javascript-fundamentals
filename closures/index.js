// //when a function has the access to its lexical env even after its scope has ended, it's closure.

// function x() {
//     console.log("closures");
//     function y() {
//         console.log("Inside inner function");
//     }
//     return y;
// }

// (x())();   // inner function is returned , which is incrementally called again.



// function x() {
//     for (var i = 1; i <= 5; i++) {
//         console.log("i->",i);
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
// }

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         console.log("i->",i);
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
// }

//issue was it required, different value at each i++ in parent lex;

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         // now fn close creates a closure and its remembers its parent lex env. Each call to close has different scope and different value in parent lex so now it work.
//         function close(j) {
//             setTimeout(() => {
//                 console.log(j);
//             }, i * 1000);
//         }
//         close(i);
//     }
// }

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         // now fn close creates a closure and its remembers its parent lex env. Each call to close has different scope and different value in parent lex so now it work.
//         ((j) => setTimeout(() => {
//             console.log(j);
//         }, j * 1000))(i);
//     }
// }

// x();


function x() {
    for (var i = 1; i <= 5; i++) {
        ((j) => setTimeout(() => {
            console.log(j);
        }, j * 1000))(i);
    }
}

x();