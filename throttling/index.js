// let counter = 0;
// function getData() {
//     console.log("Throttling Event...", counter++);
// }

// function throttling(fn, d) {
//     let timer;
//     return function () {
//         let context = this,
//             args = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(context, args)
//         }, d);
//     }
// }

// const throttlingFunction = throttling(getData, 300);

// // dry run ->

// // a-> b -> c- >d

// // Throttling triggers after every particular interval time.

const normalCount = document.querySelector("#api-count");
const throttleCount = document.querySelector("#api-count-throttling");
const inputDOM = document.querySelector("#name");
let timerId;

inputDOM.addEventListener("input", () => {
  //normal count
  let count = normalCount.innerHTML || 0;
  count = makeAPICall(count);
  normalCount.innerHTML = count;

  // throttle count
  throttle(makeAPICall, 1000);
});

const makeAPICall = function (count) {
  count = parseInt(count) + 1;
  return count;
};

const throttle = function (func, timeout) {
  // do nothing if timerId already exists
  if (timerId) return;

  // timer to execute after every timeout
  timerId = setTimeout(() => {
    let count = throttleCount.innerHTML || 0;
    count = func(count);
    throttleCount.innerHTML = count;
    timerId = undefined;
  }, timeout);
};
