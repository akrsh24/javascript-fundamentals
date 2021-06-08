// // function makeCounters() {
// //     let counter = 0;
// //     return function increaseCounter() {
// //         return counter++;
// //     }
// // }

// function makeCounters() {
//     console.log("Starting")
//     for (var i = 0; i < 5; i++) {
//         setTimeout(function (j) {
//             return function () {
//                 console.log(j);
//             }
//         }(i), 1000);
//     }
//     console.log("Ending")
// }

// let count = makeCounters();
// // count();
// // console.log(count());
// // console.log(count());
// // console.log(count());


// function sayName(){
//     console.log("OK");
// }

// sayName();


// (function(){
//     res="eh";

//     console.log(res);

//     var res;
// }

// )();

// var res = "hi";

// console.log(res);


(function() {

    let message = "Hello";
  
    console.log(message); // Hello
  
  })();

  console.log(message);