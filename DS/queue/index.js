//Queue Implementation in JS

class Queue {
    constructor() {
        this.queue = [];
    }

    get length() {
        return this.queue.length;
    }

    enqueue(item) {
        return this.queue.push(item);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return length > 0 ? false : true;
    }

    peek() {
        return this.queue[length - 1];
    }
}

let newQueue = new Queue();
console.log(newQueue);

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);

console.log(newQueue);

newQueue.dequeue();

console.log(newQueue);

console.log(newQueue.isEmpty());
console.log(newQueue.length)