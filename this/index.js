// // // // var bunny = {
// // // //     name: 'Usagi',
// // // //     tasks: ['transform', 'eat cake', 'blow kisses'],
// // // //     showTasks() {
// // // //         this.tasks.forEach((task) => {
// // // //             console.log(this);
// // // //         });
// // // //     }
// // // // };

// // // // bunny.showTasks();

// // // function defer(f, ms) {
// // //     return function (args) {
// // //         setTimeout(function () {
// // //             console.log(args);
// // //             f.apply(null,[...args]);
// // //         }, ms);
// // //     }
// // // }

// // // function fun(args) {
// // //     console.log(`Hello ${args}`);
// // // }

// // // let ok = defer(fun, 5000);
// // // ok("Akarsh OKOKOKOK");


// // const ar = "Alatsh";

// // const p = {
// //     name: "Akarsh",
// //     age: "12"
// // }



// // console.log([...ar,4,5,6]);

// 'use strict'

// const p3 = {
//     name1: "Akarsh",
//     age1: "13"
// }

// function printThis() {
//   console.log(this);
// }

// p3.printThis=printThis;
// p3.printThis();

const book = {
    title: 'Brave New World',
    author: 'Aldous Huxley',
}

function summary(...args) {
    console.log(`${this.title} was written by ${this.author} with args -> ${args}`)
}

function returnThis() {
    console.log(this);
}

summary.call(book,"trying","javascript");
summary.apply(book,["trying","javascript"]);
let bindedFunc=returnThis.bind(book,null);
bindedFunc();
