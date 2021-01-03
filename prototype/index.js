let animal = {
    name: "Animal",
    walk: function () {
        console.log(`${this.name} walking`);
    }
};

let rabbit = {
    name: "Rabbit",
    __proto__: animal
};

console.log(rabbit.name);