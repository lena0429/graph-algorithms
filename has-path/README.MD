# Has Path Problem
Write a function that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean value that indicates if there exists a directed path between the source node and the destination node.

### What is Acyclic?
Acyclic means NO cycles.

### What is Cycle?
In graph theory, a path that starts from a given vertex and ends at the same vertex is called a cycle.

### Depth First Solution
It is important to obey the directions of the arrows when solving this problem according to depth first traversal. 
<br />
Note that you should NEVER travel UPSTREAM.

### Big O - Version 1
* n = numbers of nodes
* e = numbers of edges
* Time Complexity: O(e) - because we have to travel through every single edge of the graph
* Space Complexity: O(n) - because the worst case is that I have to put every node on the stack/queue. 

### Big O - Version 2
* n = numbers of nodes
* n² = numbers of edges
* Time Complexity: O(n²) - the worst case is shown as below
<img src="./worst-case-graph.JPG" alt="worst case">

* Space Complexity: O(n)

### How to Type n square
Hold ALT and hit 253 in number keypad


