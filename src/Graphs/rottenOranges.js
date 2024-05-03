// Given a grid of dimension nxm where each cell in the grid can have values 0, 1 or 2 which has the following meaning:
// 0 : Empty cell
// 1 : Cells have fresh oranges
// 2 : Cells have rotten oranges

// We have to determine what is the earliest time after which all the oranges are rotten. A rotten orange at index [i,j] can rot other fresh orange at indexes [i-1,j], [i+1,j], [i,j-1], [i,j+1] (up, down, left and right) in unit time.

// Example 1:

// Input: grid = {{0,1,2},{0,1,2},{2,1,1}}
// Output: 1
// Explanation: The grid is-
// 0 1 2
// 0 1 2
// 2 1 1
// Oranges at positions (0,2), (1,2), (2,0)
// will rot oranges at (0,1), (1,1), (2,2) and
// (2,1) in unit time.
// Example 2:

// Input: grid = {{2,2,0,1}}
// Output: -1
// Explanation: The grid is-
// 2 2 0 1
// Oranges at (0,0) and (0,1) can't rot orange at
// (0,3).

// Your Task:
// You don't need to read or print anything, Your task is to complete the function orangesRotting() which takes grid as input parameter and returns the minimum time to rot all the fresh oranges. If not possible returns -1.

// Expected Time Complexity: O(n*m)
// Expected Auxiliary Space: O(n*m)

// Constraints:
// 1 ≤ n, m ≤ 500

class Solution {
  //Function to find minimum time required to rot all oranges.
  orangesRotting(grid) {
    console.log(grid);
    let n = grid.length;
    let m = grid[0].length;

    const visited = Array.from({ length: n }, () => Array(m));

    let queue = [];
    let count1 = 0;

    //finding all rotten oranges and pusing them into queue
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 2) {
          visited[i][j] = 2;
          queue.push({ indexes: [i, j], time: 0 });
        } else {
          visited[i][j] = 0;
        }
        //counting fresh oranges count , to see if at end all oranges are rotten
        if (grid[i][j] === 1) {
          count1++;
        }
      }
    }

    console.log("fgg", visited, queue, count1);
    let tm = 0;
    let drow = [-1, 0, 1, 0];
    let dcolumn = [0, 1, 0, -1];
    let checkFreshOrangeCountToRotten = 0;

    while (queue.length > 0) {
      let vertex = queue.shift();
      let rowIndex = vertex.indexes[0];
      let columnIndex = vertex.indexes[1];
      let time = vertex.time;
      tm = Math.max(tm, time);

      //creating neighboring indexes
      for (let i = 0; i < 4; i++) {
        let nrow = rowIndex + drow[i];
        let ncol = columnIndex + dcolumn[i];
        //check for fresh orange indices in neighbor ,
        //that is they are not rotten already by now and are fresh in origin
        if (
          nrow >= 0 &&
          nrow < n &&
          ncol >= 0 &&
          ncol < m &&
          visited[nrow][ncol] !== 2 &&
          grid[nrow][ncol] === 1
        ) {
          visited[nrow][ncol] = 2;
          queue.push({ indexes: [nrow, ncol], time: time + 1 });
          checkFreshOrangeCountToRotten++;
        }
      }
    }

    if (count1 !== checkFreshOrangeCountToRotten) {
      return -1;
    }

    console.log(visited, queue, tm, grid);
    console.log("!!!", tm);

    return tm;
  }
}

let sol = new Solution();
sol.orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]); //4

// optimized solution

var orangesRotting = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  let freshOrangesCount = 0;
  let time = 0;

  const drow = [-1, 0, 1, 0];
  const dcolumn = [0, 1, 0, -1];

  // Initialize queue with initial rotten oranges
  const queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      } else if (grid[i][j] === 1) {
        freshOrangesCount++;
      }
    }
  }

  // Perform BFS
  while (queue.length > 0) {
    const [row, column, currentTime] = queue.shift();
    time = Math.max(time, currentTime);
    for (let i = 0; i < 4; i++) {
      const nrow = row + drow[i];
      const ncol = column + dcolumn[i];
      if (
        nrow >= 0 &&
        nrow < n &&
        ncol >= 0 &&
        ncol < m &&
        grid[nrow][ncol] === 1
      ) {
        grid[nrow][ncol] = 2; // Mark as rotten
        freshOrangesCount--;
        queue.push([nrow, ncol, currentTime + 1]);
      }
    }
  }

  return freshOrangesCount === 0 ? time : -1;
};
