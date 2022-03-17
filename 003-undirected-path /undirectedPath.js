// Edges represent the connections between nodes.
// For example, [i, j] means that there is an edge or connection between i and j;
// since it is an undirected graph, we can directly travel from i to j, as well as j to i.
const nEdges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

// step 1: we can convert the edge list to the adjacency list (best form for addressing with graph)
const graph = {
    i: ['j', 'k'],
    j: ['i'],
    k: ['i', 'm', 'l'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o']
}

// step 2: implement depth first traversal
const undirectedPath = (edges, nodeA, nodeB) => {

    // first define a helper function to convert the edges list to adjacency list
    const graph = buildGraph(edges);

    // secondly, define a depth first traversal function that return a boolean and also gardian any infiniate loop
    // note that we use set to check if the node is visited or not  
    return hasPath(graph, nodeA, nodeB, new Set())
}

const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [ a, b ] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true;  // base case

    if (visited.has(src)) return false;
    visited.add(src);
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited) === true) {
            return true
        } 
    }
    return false
}