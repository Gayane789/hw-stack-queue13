class Stack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.items = [];
    }

    push(item) {
        if (Stack.isStackFull(this, this.maxSize)) {
            return 'Error: Stack is full';
        }
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    length() {
        return this.items.length;
    }

    peek() {
        return this.isEmpty() ? undefined : this.items[this.items.length - 1];
    }

    clear() {
        this.items = [];
    }

    static isStackFull(stackInstance, maxSize) {
        return stackInstance.length() >= maxSize;
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.isEmpty() ? undefined : this.items.shift();
    }

    peek() {
        return this.isEmpty() ? undefined : this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    static merge(queue1, queue2) {
        const mergedQueue = new Queue();
        while (!queue1.isEmpty()) {
            mergedQueue.enqueue(queue1.dequeue());
        }
        while (!queue2.isEmpty()) {
            mergedQueue.enqueue(queue2.dequeue());
        }
        return mergedQueue;
    }
}


const stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.push(4)); // Error: Stack is full
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.length()); // 2
stack.clear();
console.log(stack.isEmpty()); // true

const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);

const queue2 = new Queue();
queue2.enqueue(3);
queue2.enqueue(4);
queue2.enqueue(7);


const mergedQueue = Queue.merge(queue1, queue2);
console.log(mergedQueue.items);
console.log(mergedQueue.dequeue()); // 1
console.log(mergedQueue.dequeue()); // 2
console.log(mergedQueue.dequeue()); // 3
console.log(mergedQueue.dequeue()); // 4
console.log(mergedQueue.dequeue()); // 7
