//  Surrounded Regions

// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example 1:

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.
// Example 2:

// Input: board = [["X"]]
// Output: [["X"]]

// Constraints:

// m == board.length
// n == board[i].length
// 1 <= m, n <= 200
// board[i][j] is 'X' or 'O'.

const dfs = (r, c, board, visited, drow, dcol, n, m) => {
  visited[r][c] = 1;
  for (let i = 0; i < 4; i++) {
    let nrow = r + drow[i];
    let ncol = c + dcol[i];
    if (
      nrow >= 0 &&
      nrow < n &&
      ncol >= 0 &&
      ncol < m &&
      !visited[nrow][ncol] &&
      board[nrow][ncol] === "O"
    ) {
      dfs(nrow, ncol, board, visited, drow, dcol, n, m);
    }
  }
};
var solve = function (board) {
  let n = board.length;
  let m = board[0].length;
  let visited = Array.from({ length: n }, () => Array(m).fill(0));
  let drow = [-1, 0, 1, 0];
  let dcol = [0, 1, 0, -1];

  // checking boundaries
  // First row and last row
  for (let j = 0; j < m; j++) {
    //first row
    if (board[0][j] === "O" && !visited[0][j]) {
      dfs(0, j, board, visited, drow, dcol, n, m);
    }

    //last row
    if (board[n - 1][j] === "O" && !visited[n - 1][j]) {
      dfs(n - 1, j, board, visited, drow, dcol, n, m);
    }
  }

  for (let i = 0; i < n; i++) {
    //first col
    if (board[i][0] === "O" && !visited[i][0]) {
      dfs(i, 0, board, visited, drow, dcol, n, m);
    }

    //last row
    if (board[i][m - 1] === "O" && !visited[i][m - 1]) {
      dfs(i, m - 1, board, visited, drow, dcol, n, m);
    }
  }

  console.log(visited);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && board[i][j] === "O") {
        board[i][j] = "X";
        visited[i][j] = 1;
      }
    }
  }

  return board;
};
