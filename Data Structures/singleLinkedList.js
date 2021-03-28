class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // pushing at the end of the linked list
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        // from the end of the linked list
        if (!this.head) return null;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        // remove the first item from list and set head to the next item
        if (!this.head) return null;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        // add to beginning of the list
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    getValAtPos(pos) {
        if (pos < 0 || pos >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while (counter < pos) {
            current = current.next;
            counter++;
        }
        return current;

    }

    set(pos, val) {
        let result = this.getValAtPos(pos);
        if (!result) return false;
        result.val = val;
        return true;
    }

    insert(pos, val) {
        if (pos < 0 || pos >= this.length) return false;
        if (pos === this.length - 1) return this.push(val);
        if (pos === 0) return this.unshift(val);
        
        let newNode = new Node(val);
        let prevNode = this.getValAtPos(pos-1);
        let currentNode = this.getValAtPos(pos);
        prevNode.next = newNode;
        newNode.next = currentNode;
        this.length ++;
        return this;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        while(current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this;
    }
}


var list = new SingleLinkedList();
list.push("vinay");
list.push("rocks");
list.push("!");