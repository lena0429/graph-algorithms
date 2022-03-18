# Island Count
Write a function that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the numbe of islands on the grid. An island is a vertically or horizontally connected region of land.

### Grid Graph
The position (node) of grid can be designated using a pair of row and column. Given any position of this grid, we have at most four neighbors in the up down left and right directions. 

### Island
An island is considered as a vertical or horizontal connected region of land. 

### Procedure
* I need some nested code to iterate through every possible row column combinations every position.
* I need some depth first traversal code to explore any single island.  

### Big O
* c = # of column
* r = # of row
* Time Complexity: O(rc)
* Space Complexity: O(rc)