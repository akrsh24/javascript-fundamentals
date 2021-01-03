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


// function x() {
//     for (var i = 1; i <= 5; i++) {
//         ((j) => setTimeout(() => {
//             console.log(j);
//         }, j * 1000))(i);
//     }
// }

// x();


// document.getElementById("myClick")
//     .addEventListener('click', function () {
//         console.log("Clicked");
//     });


// function giveCount() {
//     let count = 0;
//     return function getCount() {
//         console.log("Clicked->", count++);
//     }
// }

// document.getElementById("myClick")
//     .addEventListener('click', giveCount());

// function attachEventListener() {
//     let count = 0;
//     document.getElementById("myClick")
//         .addEventListener('click', function () {
//             console.log("Clicked Button->", ++count);
//         });
// }

// attachEventListener();


// eventListener are registered once and all, and after in the above eg, the getCount() function is being called again and again. 
// that's why count is always incrementing and not registered again and again to zero. 
//closures for data hiding


//setTimeout issue with closure

// 1. by let block scope

for (let i = 0; i < 10; i++) {
    console.log("Loop starts->", i);
    function loop() {
        setTimeout(() => {
            console.log(i);
        }, i)
    }
    console.log("Loop ends->", i);
    loop();
}

//OR

//2. By closure

// for (var i = 0; i < 10; i++) {
//     function closedLoop() {
//         return function loop(j) {
//             setTimeout(() => {
//                 console.log(j);
//             }, j * 1000);
//         }
//     }
//     closedLoop()(i);
// }

//3. By IIFE and closure

// for (var i = 0; i < 10; i++) {
//     (() => {
//         return function (j) {
//             setTimeout(() => {
//                 console.log(j);
//             }, j * 1000);
//         }
//     })()(i);
// }
