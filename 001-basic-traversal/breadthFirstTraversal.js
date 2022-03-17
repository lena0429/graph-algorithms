const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [] 
};

// breadth first traversal - iterative version
const breadthFirstTraversalIteration = (graph, source) => {
    const queue = [ source ];

    while (queue.length > 0){
    const current = queue.shift();
    console.log(current);

      for ( let n of queue[current]) {
          queue.push(n)
      }
    }
} 

breadthFirstTraversalIteration(graph, 'a')

// NOTE that there is NO recursive version for breadth first traversal because breadth first uses the queue data structure 
// while recursion only uses STACK data structure