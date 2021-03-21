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
                } else if(val > current.val) {
                    if(!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else {
                    return 'duplicate entry';
                }

            }

        }
    }

    find(val) {
        if(!this.root) return false;
//         else if(this.root.val === val) return this.root;
        else{
            var current = this.root;
            var found = false;
            while(current && !found) {
                if(val < current.val) {
                   current = current.left
                } else if (val > current.val) {
                    current = current.right
                } else found = true;
            }
            if(!found) return false;
            return current;
        }
    }
}




var bst = new BST();
bst.insert(5)
bst.insert(4)
bst.insert(12)
bst.insert(45)
bst.insert(1)
bst.insert(67)
bst.insert(34)
bst.insert(15)
bst.insert(9)