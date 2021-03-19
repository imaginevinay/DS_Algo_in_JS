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
        if(this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop( ) {
        // from the end of the linked list
       if(!this.head) return null;
       var current = this.head;
       var newTail = current;
       while(current.next) {
           newTail = current;
           current = current.next;
       }
       this.tail = newTail;
       this.tail.next = null;
       this.length--;
       if(this.length === 0) {
           this.head = null;
           this.tail = null;
       }
       return current;
    }
    shift() {
        // remove the first item from list and set head to the next item
        if(!this.head) return null;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length --;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        // add to beginning of the list
        
    }
}


var list = new SingleLinkedList();
list.push("vinay");
list.push("rocks");
list.push("!");