// 1020. Number of Enclaves
// You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

// A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

// Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

 

// Example 1:


// Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
// Output: 3
// Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
// Example 2:


// Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
// Output: 0
// Explanation: All 1s are either on the boundary or can reach the boundary.
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 500
// grid[i][j] is either 0 or 1.

const bfs = (r,c,n,m,drow,dcol,visited,grid) => {
    let queue = []
    queue.push([r,c])
    visited[r][c] = true
    while(queue.length>0){
        let [r,c] = queue.shift()
        for(let i = 0 ; i < 4 ; i++){
            let nrow = r + drow[i]
            let ncol = c + dcol[i]
            if(nrow>=0 && nrow<n && ncol>=0 && ncol<m && !visited[nrow][ncol] 
            && grid[nrow][ncol]===1){
                visited[nrow][ncol] = true
                queue.push([nrow,ncol])

            }
        }
    }
}
var numEnclaves = function(grid) {
    let n = grid.length
    let m = grid[0].length
    let visited = Array.from({length:n},()=>Array(m).fill(false))
    let drow = [-1,0,1,0]
    let dcol = [0,1,0,-1]

    //check boundary
    for(let j = 0 ; j < m ; j++){
        if(!visited[0][j] && grid[0][j]===1){
            bfs(0,j,n,m,drow,dcol,visited,grid)
        }
        if(!visited[n-1][j] && grid[n-1][j]===1){
            bfs(n-1,j,n,m,drow,dcol,visited,grid)
        }

    }

    for(let i = 0 ; i < n ; i++){
        if(!visited[i][0] && grid[i][0]===1){
            bfs(i,0,n,m,drow,dcol,visited,grid)
        }
        if(!visited[i][m-1] && grid[i][m-1]===1){
            bfs(i,m-1,n,m,drow,dcol,visited,grid)
        }

    }

    let count = 0



    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j<m;j++){
            if(!visited[i][j] && grid[i][j]===1){
                visited[i][j] = true
                count++
            }
        }
    }

    
    return count


    
};