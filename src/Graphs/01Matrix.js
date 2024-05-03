// 542. 01 Matrix

// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1:

// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]
// Example 2:

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// mat[i][j] is either 0 or 1.
// There is at least one 0 in mat.

//Can be solved by BFS only because nearest element chahiye jo adjacent ho , dfs mai toh neeche neeche jate h
var updateMatrix = function (mat) {
  let n = mat.length;
  let m = mat[0].length;
  let distance = Array.from({ length: n }, () => Array(m).fill(false));
  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j, 0]);
      }
    }
  }

  let drow = [-1, 0, 1, 0];
  let dcol = [0, 1, 0, -1];
  console.log(mat);

  while (queue.length > 0) {
    let [r, c, d] = queue.shift();
    distance[r][c] = d;
    for (let i = 0; i < 4; i++) {
      let nrow = r + drow[i];
      let ncol = c + dcol[i];
      if (
        nrow >= 0 &&
        nrow < n &&
        ncol >= 0 &&
        ncol < m &&
        mat[nrow][ncol] !== 0
      ) {
        mat[nrow][ncol] = 0;
        queue.push([nrow, ncol, d + 1]);
      }
    }
  }

  console.log(distance);
  return distance;
};
