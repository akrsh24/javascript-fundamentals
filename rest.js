// // // const arr = [1, 2, 3, 4, 5, 6];

// // // function add(...y) {
// // //     let sum=0;
// // //     for(let arg of y) sum+=arg;

// // //     return sum;

// // // }


// // // console.log(add(1, 2, 3, 4, 5));

// // // // console.log(add(1))

// // function f() {
// //     let showArg = () => console.log(arguments[0]);
// //     showArg();
// //   }

// //   f(1); // 1


// const arr=[1,2,3,4,5];

// const max=Math.min(...arr);

// console.log(max);


let str = ["XYx", "ydgsda"];
let json = { ...str };
console.log(typeof json);

for (let arg of Object.keys(json))
    console.log(arg);

console.log(json[0]);    