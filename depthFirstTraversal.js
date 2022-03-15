// use hash tables to create a graph
// the key is the node while the value is an array containing its outgoing edges in the key-value pairs 

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [] 
};

// The goal is to print out all the values in the graph according to the depth first traversal
// The source refers to the starting node
// step 1: initialize a stack with my starting node that is with my source node.
// step 2: if the graph is not empty - I am going to pop out the top node out of the stack and set the current value euqal to it
// then I am gonna print out the current value, and push all the neighbors on the stack (REMEMBER last in first out)
// then repeat the process

// 1. iterative version
const depthFirstPrintIteration = (graph, source) => {
    const stack = [ source ];

    while (source.length > 0) {
        const current = stack.pop()
        console.log(current);

        for(let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

depthFirstPrintIteration(graph, 'a');

// 2. recursive version
const depthFirstPrintRecursion = (graph, source) => {
    console.log(source); 
    
    for (let neighbor of graph[source]) {
        depthFirstPrintRecursion(graph, neighbor)
    }
}

