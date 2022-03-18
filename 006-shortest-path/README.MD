# Shortest Path Problem
Write a function that takes in an array of edges for an undirected graph and two nodes (nodeA and nodeB). The function should return the length of the shortest path between A and B. If there is no path between A and B, return -1.
<br />
We are going to consider the path link as the number of edges within the path.

### Procedure 
This is a graph pathfinding algorithm. It can be both solved with depth first traveral and breadth first traveral. However, breadth first (explore all the directions evenly) is better for this problem. 
* Since I want to solve this algorithm with breadth first traversal, I am going to use queue.
* I am going to store not only the node but also the distance from my starting point, which means I am going to initialize my starting node on the queue along with the distance of 0 (node, distance). 
* Remember if the graph is undirected, we should always track visited nodes.   

### Big O
Linear Complexity
