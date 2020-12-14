var a = 2;

var b = (function () {
    var a = 3;
    console.log(a);
    return a;
})()

console.log(b);

if (a > 1)
    for (var i = 0; i < 10; i++)
        console.log(i);

// foo(); // 1
// var foo;
// function foo() { console.log(1); }
// foo = function () { console.log(2); };

// for (var i = 1; i <= 5; i++) {
//     (function () {
//         setTimeout(function timer() {
//             console.log(i);
//         }, i * 1000);
//     })();
// }

// const lengths = [10, 20, 30];

// function perimeter() {
//     return lengths.reduce((x, y) => x + y);
// }

// const per = perimeter();
// console.log(per);