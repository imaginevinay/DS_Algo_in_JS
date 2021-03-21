// Breadth first search
// take 2 variables 1 is queue and another will be returned at the end;

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (val < current.val) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else {
                    return 'duplicate entry'
                }
            }
        }
    }

    BFS() {
        var data = []; // to be returned at end
        var queue = []; // will hold all visited elements;
        var current = this.root; // this is our refrence to current node
        queue.push(current);

        while (queue.length) {
            current = queue.shift();
            data.push(current);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return data;
    }
}


var bst = new BST()
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);