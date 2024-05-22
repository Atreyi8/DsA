// There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].

// A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).

// Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

 

// Example 1:

// Illustration of graph
// Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
// Output: [2,4,5,6]
// Explanation: The given graph is shown above.
// Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
// Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.
// Example 2:

// Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
// Output: [4]
// Explanation:
// Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.
 

// Constraints:

// n == graph.length
// 1 <= n <= 104
// 0 <= graph[i].length <= n
// 0 <= graph[i][j] <= n - 1
// graph[i] is sorted in a strictly increasing order.
// The graph may contain self-loops.
// The number of edges in the graph will be in the range [1, 4 * 104].


/**
 * @param {number[][]} graph
 * @return {number[]}
 */

const dfsCycleCheck = (node,visited,pathVisited,check,graph) => {
    visited[node] = 1
    pathVisited[node] =1 

    //initialising check[node] = 0 , i.e not a safe node
    //if returns back with false that is no cycle , it is safe node
    check[node] = 0
    for(let neighbor of graph[node]){
      
        if(!visited[neighbor]){
            if(dfsCycleCheck(neighbor,visited,pathVisited,check,graph)===true){
               
                //check[node] = 0
                return true
            }
        }
        else{
            if(pathVisited[neighbor]===1){
            
                //check[node] = 0
                return true
                }
        }
    }
           
    
    //no cycle detaction , and path visited to 0
    
    check[node] = 1
    pathVisited[node] = 0

    return false

}
var eventualSafeNodes = function(graph) {
    let n = graph.length
    let visited = Array(n).fill(0)
    let pathVisited = Array(n).fill(0)
    let check = Array(n).fill(0)
    let safe_Nodes = []
    for(let i = 0 ; i < n ; i++){
        if(!visited[i]){
            //call dfs
            dfsCycleCheck(i,visited,pathVisited,check,graph)
        }
    }
   
     for(let i = 0 ; i < n ; i++){
        if(check[i]===1){
            safe_Nodes.push(i)
        }
     }
   
     return safe_Nodes
    
};