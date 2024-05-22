// Given a boolean 2D matrix grid of size n * m. You have to find the number of distinct islands where a group of connected 1s (horizontally or vertically) forms an island. Two islands are considered to be distinct if and only if one island is not equal to another (not rotated or reflected).

// Example 1:

// Input:
// grid[][] = {{1, 1, 0, 0, 0},
//             {1, 1, 0, 0, 0},
//             {0, 0, 0, 1, 1},
//             {0, 0, 0, 1, 1}}
// Output:
// 1
// Explanation:
// grid[][] = {{1, 1, 0, 0, 0}, 
//             {1, 1, 0, 0, 0}, 
//             {0, 0, 0, 1, 1}, 
//             {0, 0, 0, 1, 1}}
// Same colored islands are equal.
// We have 2 equal islands, so we 
// have only 1 distinct island.

// Example 2:

// Input:
// grid[][] = {{1, 1, 0, 1, 1},
//             {1, 0, 0, 0, 0},
//             {0, 0, 0, 0, 1},
//             {1, 1, 0, 1, 1}}
// Output:
// 3
// Explanation:
// grid[][] = {{1, 1, 0, 1, 1}, 
//             {1, 0, 0, 0, 0}, 
//             {0, 0, 0, 0, 1}, 
//             {1, 1, 0, 1, 1}}
// Same colored islands are equal.
// We have 4 islands, but 2 of them
// are equal, So we have 3 distinct islands.

// Your Task:

// You don't need to read or print anything. Your task is to complete the function countDistinctIslands() which takes the grid as an input parameter and returns the total number of distinct islands.

// Expected Time Complexity: O(n * m)
// Expected Space Complexity: O(n * m)

// Constraints:
// 1 ≤ n, m ≤ 500
// grid[i][j] == 0 or grid[i][j] == 1

class Solution {
    //Function to count the number of distinct islands.
    
    dfs(r, c, n, m, cordArrForEachIslandRun, visited, grid, baseRow, baseCol) {
        visited[r][c] = true;
        cordArrForEachIslandRun.push([r - baseRow, c - baseCol]);
        let drow = [-1, 0, 1, 0];
        let dcol = [0, 1, 0, -1];
        
        for(let i = 0; i < 4; i++) {
            let nrow = r + drow[i];
            let ncol = c + dcol[i];
            if(nrow >= 0 && nrow < n && ncol >= 0 && ncol < m &&
                !visited[nrow][ncol] && grid[nrow][ncol] === 1) {
                this.dfs(nrow, ncol, n, m, cordArrForEachIslandRun, visited, grid, baseRow, baseCol);
            }
        }
    }

    countDistinctIslands(grid) {
        let n = grid.length;
        let m = grid[0].length;
        let visited = Array.from({length: n}, () => Array(m).fill(false));

        let setArr = new Set();

        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(!visited[i][j] && grid[i][j] === 1) {
                    let cordArrForEachIslandRun = [];
                    this.dfs(i, j, n, m, cordArrForEachIslandRun, visited, grid, i, j);
                    console.log(cordArrForEachIslandRun,setArr);
                    setArr.add(JSON.stringify(cordArrForEachIslandRun)); // Convert to string to store in set
                }
            }
        }

        return setArr.size;
    }
}
let sol = new Solution();
console.log(sol.countDistinctIslands([[1, 1, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [1, 1, 0, 1, 1]]))
