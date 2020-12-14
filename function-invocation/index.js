let printFullName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " from " + city + " and " + state);
}

let person1 = {
    firstName: "Akarsh",
    lastName: "Srivastava"
}

let person2 = {
    firstName: "Virat",
    lastName: "Kohli"
}

//call 
//functionToBeCalled.call(objectCallingIt,...argumentsToTheFunction);

printFullName.call(person1);
printFullName.call(person2);

//apply
//functionToBeCalled.apply(objectCallingIt,[...argumentsToTheFunction]);

printFullName.apply(person1);
printFullName.apply(person2);

//call 
//functionToBeCalled.call(objectCallingIt,...argumentsToTheFunction);

printFullName.call(person1, "ND", "UP");
printFullName.call(person2, "GK", "Delhi");

//apply
//functionToBeCalled.apply(objectCallingIt,[...argumentsToTheFunction]);

printFullName.apply(person1, ["ND", "UP"]);
printFullName.apply(person2, ["GK", "Delhi"]);

//bind
//functionToBeCalled.bind(objectCallingIt,...argumentsToTheFunction);
//returns a reference to the function, instead in call/bind are called there only.

const getFullName = printFullName.bind(person1, "ND", "UP");
console.log(getFullName);
getFullName();
