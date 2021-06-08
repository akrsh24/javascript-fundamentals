// // const f1 =

// const cb = a => console.log(a);

// const result = cb => {
//     const a = 'some res';
//     cb(a);
// }
// result(cb);


// const fun1 = () => {
//     return fun2;
// }

// const fun2 = () => {
//     console.log("Hello");
// }

// const res = fun1();

// // res();
// console.log(res);


// const fun1 = () => {
//     console.log("Step1");
//     setTimeout(() => {
//         console.log("After timeout1");
//         setTimeout(() => {
//             console.log("After timeout2");
//         }, 0)
//     }, 0);

//     console.log("Step2");
// }

// const fun1 = () => {
//     console.log("Step1");
//     setTimeout(() => {
//         console.log("After timeout1");
//     }, 1000);
//     setTimeout(() => {
//         console.log("After timeout2");
//     }, 2000)
//     setTimeout(() => {
//         console.log("After timeout3");
//     }, 0)
//     console.log("Step2");
// }

// fun1();

// const fun1 = () => {
//     console.log("Step1");
//     for (let i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log("timeout->", i);
//         }, 3000);
//     }
//     console.log("Step2");
// }

// fun1();

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 3000);
// }

// closure, scope
// for (var i = 0; i < 5; i++) {
//     setTimeout(function (j) {
//         console.log(j,"=>");
//         return function () {
//             console.log("timeout->", j);
//         }
//     }(i), 3000);
// }

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   // pass in the variable i so that each function 
//   // has access to the correct index
//   setTimeout(function(i_local) {
//     return function() {
//       console.log('The index of this number is: ' + i_local);
//     }
//   }(i), 3000);
// }

// const fun1 = function () {
//     return function () {
//         setTimeout(() => {
//             // console.log("Hi");
//             // return 1;
//         }, 1000);
//     }
// }
// const res = fun1();
// console.log(res());

// const f1 = setTimeout(() => {
//     // console.log("Hi");
//     return "Ok";
// }, 1000);

// console.log(f1);

// const f1 = () => {
//     let promises = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Hi");
//         }, 1000);
//     });
//     return promises;
// }
// f1()
//     .then((res) => console.log(res))
//     .catch((rej) => console.log(rej));
// console.log(f1().then(res => console.log(res)));


// function generateMyHandler(x) {
//     return function () {
//         return x;
//     }
// }

// for (var i = 0; i < 10; i++) {
//     const res = generateMyHandler(i);
//     console.log(res());
// }

// let message = 'Hello!';
// let res = function () { console.log(message) };
// message = 'Goodbye!';
// res();

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     // pass in the variable i so that each function 
//     // has access to the correct index
//     setTimeout(function (i_local) {
//         return function () {
//             console.log('The index of this number is: ' + i_local);
//         }
//     }(i), 3000);
// }

// for (var i = 0; i < 1; i++) {
//     let res =(function (x) { /* we use this function expression simply as a factory
//                        to return the function we really want to use: */

//             /* we want to return a function reference
//                so we write a function expression*/
//             return function () {
//                 console.log(x); /* x here refers to the argument of the factory function
//                        captured by the 'inner' closure */
//             }

//             /* The brace operators (..) evaluates an expression, in this case this
//                function expression which yields a function reference. */

//         })(i) /* The function reference generated is then immediately called()
//                where the variable i is passed */
//     console.log(res);
// }

// (function(i){
//     console.log("Res-=>",i)
// })(1)

//-----------starts
//--------Here, due to single binding of var, its value gets to be last value of i 


// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }

//--------Here, due to closure, inside function capture the value of i to j. So when timeout works, it has value of j<-i.
// -------the "outer function" returns an "inner function" which now has x=i at the
// ======== time the "outer function" was called

// for(var i=0; i<4; i++) {
//   setTimeout(
//     // argument #1 to setTimeout is a function.
//     // this "outer function" is immediately executed, with `i` as its parameter
//     (function(x) {
//       // the "outer function" returns an "inner function" which now has x=i at the
//       // time the "outer function" was called
//       return function() {  
//         console.log("i=="+i+", x=="+x);
//       };
//     })(i) // execute the "closure" immediately, x=i, returns a "callback" function
//   // finishing up arguments to setTimeout
//   , i*100);
// }

// for (var i = 0; i < 10; i++) {
//     setTimeout(function (j) {
//         return function () {
//             console.log(j);
//         }
//     }(i), 1000);
// }
///////---------------------------------------------ends---------------
// const arr = [];
// for (var i = 0; i < 3; i++) {
//     arr.push(() => i);
// }
// const res = arr.map(x => x());

// console.log(res);

const res= 2 in [1,2];
console.log(res);