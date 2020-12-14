// Bind invocation

let person = {
    firstname: "Akarsh",
    lastname: "Srivastava"
};

let printFullName = function (city, town, x) {
    console.log(this.firstname + " " + this.lastname + " " + city + " " + town + " " + x);
}

let getFullName = printFullName.bind(person);
getFullName("UP", "Noida","s");

// Polyfill bind method

Function.prototype.polyFillBindFunction = function (...args) {
    let obj = this, params = args.slice(1);
    return function (...args2) {
        return obj.apply(args[0], [...params, ...args2]);
    };
}

let getFullName2 = printFullName.polyFillBindFunction(person, "Delhi");
getFullName2("UP", "Noida");