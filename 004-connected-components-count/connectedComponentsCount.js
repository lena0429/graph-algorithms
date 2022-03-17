const connectedComponentsCount = (graph) => {
    const visited = new Set();
    const count = 0;

    // we need some iterative code to help us hop to different connected components
    // we also need some traveral code to explore some single component as far as possible

    // use in in the for loop will give us the key of key-value pairs from the object
    for (let node in graph) {
        // console.log(visited)
        if( explore(graph, node, visited) === true) {
            count += 1
        };
    }


    return count;
}

// This explore functio help us traverse a single component as far as possible
// DO NOT FORGET to mark nodes as visited to prevent any cycle in the graph
const explore = (graph, current, visited) => {
    // if we have already visited this node, return false;
    if (visited.has(String(current))) return false;
    // if not, we add this node to visited as we traverse it
    visited.add(String(current));

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    };

    // if this function has visited All of the neighbors, we want to return true
    return true;
}