# Connected Components Count Problem
Define a function that takes in an adjacency list if an undirected graph. The function should return the number of connected components within the graph.

### Steps
* Step 1: Convert the edges list to an anjacency list (hash table) that represents an undirected graph.
* Step 2: Visualize the graph and define how many connected components we are dealing with.
* step 3: Initialize a variable `count` with a value 0, then implement nodes traversal and some iteration (just to potentially begin a traversal at EVERY single starting point). Make sure we marked nodes visited as trversing them. 
* Note that only when we marked a NEW node as visited and completed that traversal should we increment the count.

### Be Sure to Mark Nodes as Visited as Traversing Them! We can use `set` to mark nodes as visited

### Big O
* n = # of nodes
* e = # of edges
* Time Complexity: O(e)
* Space Complexity: O(n)
