//Stack implementation in JS

//Stack ES6 class implementation
class Stack {

    constructor() {
        //stack array
        this.stack = [];
    }

    //length
    get length() {
        return this.stack.length;
    }

    //push
    push(item) {
        return this.stack.push(item);
    }

    //pop 
    pop() {
        return this.stack.pop();
    }

    //peek
    peek() {
        return this.stack[this.length - 1];
    }

    //isEmpty
    isEmpty() {
        return this.length > 0 ? false : true;
    }
}

let stack1 = new Stack();
console.log(stack1);

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);

console.log(stack1);

stack1.pop();

console.log(stack1);

console.log(stack1.peek());