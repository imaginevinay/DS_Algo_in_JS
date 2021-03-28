class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // add to end of dll;
        var newNode = new Node(val);
        if(!this.head) {
             this.head = newNode;
             this.tail = this.head;
        } else {
              this.tail.next = newNode; 
              newNode.prev = this.tail;
              this.tail = newNode; 
        }
        this.length++;
        return this;
    }

    pop(val) {
        // remove from end
        if(!this.head) return false;
        let popped = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
         this.tail = popped.prev;
         this.tail.next = null;
         popped.prev = null; 
        }
        this.length--;
        return popped
    }

    shift() {
        // remove node from beginning;
        if(!this.head) return false;
        var removedNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length --;
        return removedNode;
    }

    unshift(val) {
        // add to beginning of dll;
        var newNode = new Node(val)
        if(!this.head) {
              this.head = newNode;
              this.tail = this.head;
        } else {
              var oldHead = this.head;
              oldHead.prev = newNode;
              newNode.next = oldHead;
              this.head = newNode;   
        }
        this.length ++;
        return this;
    }

    get(index) {
        // get node at index mentioned
        if(index < 0 || index >= this.length) return null;
        var midIndex = Math.floor(this.length/2);
        var counter = 0;
        var current = this.head;
        if(index <= midIndex) {
             while(counter !== index) {
                  current =  current.next;
                  counter ++;
             }
//                return current;
        } else {
            counter = this.length-1
            current = this.tail;
             while(counter !== index) {
                 current =  current.prev;
                 counter--;
             }
//                return current;
        }
        return current;
    }

    set(index, val) {
        var node = this.get(index);
        if(node) {
            node.val = val
            return true;
        }
        return false;
    }

    insert(index,val) {
        if(index <0 || index >= this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length - 1) return this.push(val)
        var newNode = new Node(val);
        var prevNode = this.get(index-1);
        var nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length ++
        return this;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();
        var removedNode = this.get(index);
        var prevNode = removedNode.prev;
        var afterNode = removedNode.next;
        prevNode.next = afterNode;
        afterNode.prev = prevNode;
        removedNode.prev = null;
        removedNode.next = null;
        this.length --;
        return removedNode;
    }
}


var dll = new DoubleLinkedList();
dll.push(1)
dll.push(2)
dll.push(3)