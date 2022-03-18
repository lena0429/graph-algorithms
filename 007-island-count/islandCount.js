const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;

    for (let r = 0; r < grid.length; r += 1){
        for(let c = 0; c <grid.length; c += 1){
            // invoke a helper function to implement depth first traveral
            if (explore(grid, r, c, visited) === true) {
                count += 1
            }
        }
    }
    return count;
}

const explore = (grid, r, c, visited) => {
    // base case - to guard if the postion is out of bounds(越界) or not
    const rowInBounds = 0 <= r && r < grid.length;
    const columnInBounds = 0 <= c && c < grid.length;
    if (!rowInBounds || !columnInBounds) return false;

    if (grid[r][c] === 'W') return false;

    const position = r + ',' + c;
    if(visited.has(position)) return false;
    visited.add(position);

    explore(grid, r - 1, c, visited)  // upward
    explore(grid, r + 1, c, visited)  // down
    explore(grid, r, c - 1, visited)  // left
    explore(grid, r, c + 1, visited)  // right

    return true; // this means that I just finished exploring a new island and I need to count it
}

const myGrid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
]

islandCount(myGrid)