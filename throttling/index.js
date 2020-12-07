let counter = 0;
function getData() {
    console.log("Throttling Event...", counter++);
}


function throttling(fn, d) {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, d);
    }
}

const throttlingFunction = throttling(getData, 300);



// dry run ->

// a-> b -> c- >d 