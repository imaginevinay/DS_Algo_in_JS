class graph {
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex) {
        if(!this.adjList[vertex]){
            this.adjList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if(this.adjList[vertex1] && this.adjList[vertex2]) {
            if(this.adjList[vertex1].indexOf(vertex2) === -1) {
               this.adjList[vertex1].push(vertex2);  
            }
            if(this.adjList[vertex2].indexOf(vertex1) === -1) {
                this.adjList[vertex2].push(vertex1);
            }            
        } else if(!this.adjList[vertex1] && this.adjList[vertex2]) {
            this.adjList[vertex1] = [vertex2];
            if(this.adjList[vertex2].indexOf(vertex1) === -1) {
                this.adjList[vertex2].push(vertex1);
            }
        } else if (this.adjList[vertex1] && !this.adjList[vertex2]) {
            this.adjList[vertex2] = [vertex1];
            if(this.adjList[vertex1].indexOf(vertex2) === -1) {
               this.adjList[vertex1].push(vertex2);  
            }
        } else {
            this.adjList[vertex1] = [vertex2];
            this.adjList[vertex2] = [vertex1];  
        }
    }

    removeEdge(vertex1, vertex2) {
        if(!this.adjList[vertex1] || !this.adjList[vertex2]) return null;
        this.adjList[vertex1] = this.adjList[vertex1].filter(v => v !== vertex2);
        this.adjList[vertex2] = this.adjList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex) {
        if(!this.adjList[vertex]) return null;
        while(this.adjList[vertex].length) {
            let current = this.adjList[vertex].pop();
            this.removeEdge(vertex, current);
        }
        delete this.adjList[vertex];
    }

    dfsRecursion(start) {
        let results = [];
        let visited = {}
        let adjList = this.adjList;
        (function dfs(vertex) {
//             if(!vertex) return null;
            results.push(vertex);
            visited[vertex] = true;
            adjList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        })(start)
        return results
    }

    dfsIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let current;
        visited[start] = true;
        while(stack.length) {
           current = stack.pop();
           result.push(current);
           this.adjList[current].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               }
           })
        }
        return result;
    }
    bfsIterative(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let current;
        visited[start] = true;
        while(queue.length) {
            current = queue.shift();
            result.push(current);

            this.adjList[current].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            })
        }

        return result;
    }
}


var G = new graph()
G.addVertex("A")
G.addVertex("B")
G.addVertex("C")
G.addVertex("D")
G.addVertex("E")
G.addVertex("F")
G.addEdge("A","B")
G.addEdge("A","C")
G.addEdge("B","A")
G.addEdge("B","D")
G.addEdge("C","A")
G.addEdge("C","E")
G.addEdge("D","B")
G.addEdge("D","E")
G.addEdge("D","F")
G.addEdge("E","C")
G.addEdge("E","D")
G.addEdge("E","F")
G.addEdge("F","D")
G.addEdge("F","E")