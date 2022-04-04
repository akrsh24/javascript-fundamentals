// triggers after timeout of last occurence

const withoutDebounceDOM = document.querySelector("#without-debouncing");
const withDebounceDOM = document.querySelector("#with-debouncing");
const inputDOM = document.querySelector("#name");
let timerId;

const makeAPICall = (count) => {
  return parseInt(count) + 1;
};

inputDOM.addEventListener("input", () => {
  // without debouncing
  let withoutDebounceDOMCount = withoutDebounceDOM.innerHTML || 0;
  withoutDebounceDOMCount = makeAPICall(withoutDebounceDOMCount);
  withoutDebounceDOM.innerHTML = withoutDebounceDOMCount;

  // with debouncing
  debounce(makeAPICall, 1000);
});

const debounce = (func, timeout) => {
  // clear last timeout occuerence
  clearTimeout(timerId);

  // go for setting occurrence of current event
  timerId = setTimeout(() => {
    let withDebounceDOMCount = withDebounceDOM.innerHTML || 0;
    withDebounceDOMCount = func(withDebounceDOMCount);
    withDebounceDOM.innerHTML = withDebounceDOMCount;
  }, timeout);
};
