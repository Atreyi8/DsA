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



// Solution - As we have to Kahn's Algo Topo sort , we need to find the indegree of each node and then push
// the nodes with 0 indegree to queue and then reduce the indegree of the neighbors and 
//then push the neighbors with 0 indegree to queue and so on.

//But here terminal nodes have outdegree as 0 and indegree is there
//So we will reverse the graph


var eventualSafeNodes = function(graph) {
    let n = graph.length
    let indegree = Array(n).fill(0)
    let reversedGraph = Array(n).fill().map(() => []);
    //reverse adj or graph
     // Reverse the graph
    for (let i = 0; i < n; i++) {
        for (let neighbor of graph[i]) {
            reversedGraph[neighbor].push(i); // Reverse edge direction
            indegree[i]++;
        }
    }

    console.log(reversedGraph, indegree);
    let q = []
    let topo = []
    for(let i = 0 ; i < n ; i++){
        if(indegree[i]===0){
            q.push(i)
        }
    }

    while(q.length>0){
        let node = q.shift()
        topo.push(node)
        for(let neighbor of reversedGraph[node]){
            indegree[neighbor]--
            if(indegree[neighbor]===0){
                q.push(neighbor)
            }
        }
    }
    // console.log(topo)
    return topo.sort((a,b)=>a-b)
    
};