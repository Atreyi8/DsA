// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */

const bfs = (i, j, visited, drow, dcol, n, m, grid) => {
  let queue = [];
  queue.push([i, j]);

  while (queue.length > 0) {
    let [r, c] = queue.shift();
    for (let i = 0; i < 8; i++) {
      let nrow = r + drow[i];
      let ncol = c + dcol[i];

      if (
        nrow >= 0 &&
        nrow < n &&
        ncol >= 0 &&
        ncol < m &&
        visited[nrow][ncol] === false &&
        grid[nrow][ncol] === "1"
      ) {
        visited[nrow][ncol] = true;
        queue.push([nrow, ncol]);
      }
    }
  }
};

var numIslands = function (grid) {
  let n = grid.length;
  let m = grid[0].length;

  let visited = Array.from({ length: n }, () => Array(m).fill(false));

  let drow = [-1, 0, 1, 0];
  let dcol = [0, 1, 0, -1];

  let count = 0;
  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      if (grid[i][j] !== "0") {
        if (!visited[i][j]) {
          count = count + 1;
          visited[i][j] = true;

          bfs(i, j, visited, drow, dcol, n, m, grid);
        }
      }
    }
  }

  return count;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
