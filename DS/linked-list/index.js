//Linked list implementation in JS

//Single LL

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class SingleLinkedList {
    constructor() {
        this.singleLL = [];
    }

    get length() {
        return this.singleLL.length;
    }

    insert(node) {
        return this.singleLL.push(node);
    }

    delete(value){
        
    }


}