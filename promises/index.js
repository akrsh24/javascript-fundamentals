//Promises

let promiseFunction = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

//---normal promise-------

// function setPromisedData() {
//     promiseFunction.
//         then(data => {
//             // console.log(data);
//             document.getElementById("output").innerHTML = data.id;
//         })
//         .catch(error => {
//             document.getElementById("output").innerHTML = error;
//         });
// }

// setPromisedData();


//---async await-------

// async function setAsyncData() {
//     let promisedData = null;
//     promisedData = await promiseFunction;
//     console.log(promisedData);
// }

// setAsyncData();

// --- async and promise -----

// async function getPromiseAsyncData() {
//     return promiseFunction;
// }

// getPromiseAsyncData().then(data => console.log(data));

//----async and timer-----

// async function setTimer() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello");
//         }, 3000)
//     });
// }

// async function getTimer() {
//     try {
//         let timerData = await setTimer();
//         console.table(timerData);
//     }
//     catch (error) {
//         console.error(error);
//     }
// }

// getTimer();

const set = () => {
    console.log("Arrow->", this);
}

function get() {
    console.log("Normal->", this);
}

set();
get();