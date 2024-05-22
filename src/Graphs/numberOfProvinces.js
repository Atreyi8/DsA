/**
 * @param {number[][]} isConnected
 * @return {number}
 */

// 547. Number of Provinces
// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

 

// Example 1:


// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2
// Example 2:


// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3
 

// Constraints:

// 1 <= n <= 200
// n == isConnected.length
// n == isConnected[i].length
// isConnected[i][j] is 1 or 0.
// isConnected[i][i] == 1
// isConnected[i][j] == isConnected[j][i]


const dfs = (node,visited,adj) => {
    visited[node] = true
    for(let neighbor of adj[node]){
        if(!visited[neighbor]){
            dfs(neighbor,visited,adj)
        }
    }
}
var findCircleNum = function(isConnected) {
    console.log(isConnected)
    //Its a matrix
    //Creating adj list 
    let N = isConnected.length;
      let adjList = [];
    for (let i = 0; i < isConnected.length; i++) {
        adjList[i] = []; // Initialize adjList[i] as an empty array
        for (let j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] === 1 && i !== j) {
                if (!adjList[j]) adjList[j] = []; // Initialize adjList[j] if it's undefined
                adjList[i].push(j);
                adjList[j].push(i);
            
            }
        }
    }
    let visited = Array(N).fill(false)
    let count = 0
    for(let i = 0 ; i < N ; i++){
        if(!visited[i]){
            count++
            dfs(i,visited,adjList)
        }
    }
    return count


  
};