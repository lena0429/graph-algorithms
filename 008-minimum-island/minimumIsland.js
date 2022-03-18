const minimumIsland = (grid) => {
    let smallest = Infinity;

    const visited = new Set();

    for(let r = 0; r < grid.length; r++){
        // make sure you reference the inner column line
        for(let c = 0; c < grid[0].length; c++){
            const size = exploreSize(grid, r, c, visited)
            if (size > 0 && size < smallest) {
                smallest = size;
            }
        }
    }

    return smallest;
}

const exploreSize = (grid, r, c, visited) => {
    // base case to check if the position combination is in bounds
    const rowInBounds = 0 <= r && r < grid.length;
    const colInBounds = 0 <= c && c < grid[0].length;
    if (!rowInBounds || !colInBounds) return 0;

    if (grid[r][c] === 'W') return 0; 
     
    const position = r + ',' + c;  // make position a string because we need a primative data to add to the set
    if(visited.has(position)) return 0;
    visited.add(position);

    let size = 1; // represents the current position
    size += exploreSize(grid, r - 1, c, visited)
    size += exploreSize(grid, r + 1, c, visited)
    size += exploreSize(grid, r, c - 1, visited)
    size += exploreSize(grid, r, c + 1, visited)

    return size;
}


// The set gives us O(1) lookup and O(1) insersion, which is going to be a really quick data structure to use.