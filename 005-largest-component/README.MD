# Find the Largest Component Problem
Write a function that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

### Approch
* Step 1: visualize the graph
* Step 2: we may need some iterative code to travel and hop to different components or islands
* Step 3: we may also need some sort of traversal variation to traverse and also find the size of a connected component
* note that we must mark any node visited when we traverse in a component to get rid of infinite loop caused by any cycle in the graph
* Step 4: Compare among those connected components and return the value of largest size

### Big O
* n = # of nodes
* e = # of edges
* Time Complexity: O(e)
* Space Complexity: O(n)
