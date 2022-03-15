const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

// Depth First Traversal - Recursive Solution
const hasPath = (graph, src, dst) => {
    if (src === dst) return true; // base case
    
    for(let neighbor of graph[src]){
        if (hasPath(graph, neighbor, dst) === true) {
            return true;
        }
    }
    return false;
}

// Depth First Traversal - Iterative Solution
const hasPathIterative = (graph, src, dst) => {
    const stack = [ src ];
    
    while (stack.length > 0) {
      const current = stack.pop()
      if(current === dst) {
          return true;
      } else {
          for(let n of graph[current]){
              stack.push(n)
          }
      }
    }
     return false
}


// Breadth First Traversal
const hasPathBreadthFirst = (graph, src, dst) => {
    const queue = [ src ];

    while (queue.length > 0) {
        const current = queue.shift()
        if (current === dst) return true;
        else {
            for (let n of graph[current]){
                queue.push(n)
            }
        }
    } 
    return false
}

