const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    
    // if I want to initialize my set with some values, I have to pass in array containing those values
    const visited = new Set([ nodeA ]);
   
    const queue = [ [nodeA, 0] ];

    while (queue.length > 0) {
        // while the queue is not empty, I should remove the front element from the queue
        const [ node, distance ] = queue.shift();
        
        if (node === nodeB) return distance;

        // if the if statement is not true, I am going to iterate through all the neighbors
        for (let neighbor of graph[node]){
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push([ neighbor, distance + 1])
            }
        }
    }
    return -1
} 


const buildGraph = (edges) => {
    const graph = {};
    
    // iterate through every pair of edges and unpack them 
    for (let edge of edges) {
        const [ a, b ] = edge;
        // if a is not in the graph as a key, it should be created for the first time
        // and it is initialized as an empty array
        if (!(a in graph)) graph[a] = []; 
        if (!b(b in graph)) graph[b] = [];
        // add neighbors
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}