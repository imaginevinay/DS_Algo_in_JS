class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class DFSPreorder{
    constructor(){
        this.root = null;
    }

    insert(val) {
        var newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        else{
            var current = this.root;
            while(true) {
                if(val < current.val) {
                    if(!current.left) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if(!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else return 'not creating duplicate node';
            }
        }
    }

    preorder() {
        // root then left then right
        var data = [] // this will be returned at the end and contains traversed node values
        function traverse(node) {
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data
    }

    postOrder() {
        // left child then right child then node
        var data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val) 
        }
        traverse(this.root)
        return data;
    }

    inorder() {
        // left child then root then right child
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data;
    }
}


var dfs = new DFSPreorder();
dfs.insert(10)
dfs.insert(6)
dfs.insert(15)
dfs.insert(3)
dfs.insert(8)
dfs.insert(20)