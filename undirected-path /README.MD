# Undirected Path
Write a function that takes in an array of edges for an undirected graph and two nodes(nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

<br />
We can convert the edge list to the adjacency list (best form for addressing with graph).

### What is Cycle?
In graph theory, a path that starts from a given vertex and ends at the same vertex is called a cycle.
<br />
Note that the cycle is important to watch out for in any graph because if we don't do any special handling we may get trapped in an infinite traversal. We can get rid of this infinite traversal by marking nodes as visited.

### Bog O
* n: the number of nodes
* Time Complexity: O(n²)
* Space Complexity: O(n)
