# Minimum Island
Write a function that takes in a grid Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. 

### Procedure
* I need some nested code to iterate through every possible row column combinations every position.
* I need some depth first traversal code to explore a single island.
* I need some code to compare the length of those island.
* The process is basically like this: we start our nested loops in the top left corner. If the current position is water, we don't need to do anything. Then it come to out next iteration, if it is an land I can begin on my depth first traversal. At this point, I should mark things as visited to avoid any infinite loops. At the end of this traversal, I want to mark all the lands visited and also determine the size of this entire island region.    

### Big O
* c = # of column
* r = # of row
* Time Complexity: O(rc)
* Space Complexity: O(rc)
