class Graph{
    constructor() {
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
 }