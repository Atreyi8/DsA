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

function solve(board) {
  helper(board, "Y", "O");
  console.log(board);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == "O") board[i][j] = "X";
      if (board[i][j] == "Y") board[i][j] = "O";
    }
  }
  return board;
}
function helper(board, res, key) {
  let N = Math.max(board.length, board[0].length);
  for (let i = 0; i < N; i++) {
    if (i < board.length && board[i][0] == key) dfs(i, 0, board, res, key);

    if (i < board.length && board[i][board[i].length - 1] == key)
      dfs(i, board[i].length - 1, board, res, key);

    if (i < board[0].length && board[0][i] == key) dfs(0, i, board, res, key);

    if (i < board[0].length && board[board.length - 1][i] == key)
      dfs(board.length - 1, i, board, res, key);
  }
}
function dfs(i, j, grid, res, key) {
  grid[i][j] = res;
  let rowSize = grid.length;
  let columnSize = grid[0].length;
  if (i > 0 && grid[i - 1][j] == key) {
    dfs(i - 1, j, grid, res, key);
  }
  if (i < rowSize - 1 && grid[i + 1][j] == key) {
    dfs(i + 1, j, grid, res, key);
  }
  if (j > 0 && grid[i][j - 1] == key) {
    dfs(i, j - 1, grid, res, key);
  }
  if (j < columnSize - 1 && grid[i][j + 1] == key) {
    dfs(i, j + 1, grid, res, key);
  }
}
