// Given a Directed Acyclic Graph of N vertices from 0 to N-1 and a 2D Integer array(or vector) edges[ ][ ] of length M, where there is a directed edge from edge[i][0] to edge[i][1] with a distance of edge[i][2] for all i.

// Find the shortest path from src(0) vertex to all the vertices and if it is impossible to reach any vertex, then return -1 for that vertex.

// Example1:

// Input:
// N = 4, M = 2
// edge = [[0,1,2],[0,2,1]]
// Output:
// 0 2 1 -1
// Explanation:
// Shortest path from 0 to 1 is 0->1 with edge weight 2. 
// Shortest path from 0 to 2 is 0->2 with edge weight 1.
// There is no way we can reach 3, so it's -1 for 3.
// Example2:

// Input:
// N = 6, M = 7
// edge = [[0,1,2],[0,4,1],[4,5,4],[4,2,2],[1,2,3],[2,3,6],[5,3,1]]
// Output:
// 0 2 3 6 1 5
// Explanation:
// Shortest path from 0 to 1 is 0->1 with edge weight 2. 
// Shortest path from 0 to 2 is 0->4->2 with edge weight 1+2=3.
// Shortest path from 0 to 3 is 0->4->5->3 with edge weight 1+4+1=6.
// Shortest path from 0 to 4 is 0->4 with edge weight 1.
// Shortest path from 0 to 5 is 0->4->5 with edge weight 1+4=5.
// Your Task:

// You don't need to print or input anything. Complete the function shortest path() which takes an integer N as number of vertices, an integer M as number of edges and a 2D Integer array(or vector) edges as the input parameters and returns an integer array(or vector), denoting the list of distance from src to all nodes.

// Expected Time Complexity: O(N+M), where N is the number of nodes and M is edges
// Expected Space Complexity: O(N)

// Constraint:
// 1 <= N <= 100
// 1 <= M <= min((N*(N-1))/2,4000)
// 0 <= edgei,0,edgei,1 < n
// 0 <= edgei,2 <=105


class Solution{
    topoSort(node,visited,adj,stack){
        visited[node] = 1
        for(let neighbor of adj[node]){
            if(!visited[neighbor[0]]){
                this.topoSort(neighbor[0],visited,adj,stack)
            }
        }
        stack.push(node)
    }

    shortestPath(N, M, edges){
        // Step 1 - create topological
        // Using DFS can be done via BFS as well


        //Creating adj list with weight
        let adj = Array(N).fill().map(() => [])
        let visited = Array(N).fill(0)
        for(let i = 0 ; i < M ; i++){
            let x = edges[i][0]
            let y = edges[i][1]
            let w = edges[i][2]
            adj[x].push([y,w])
        }

        console.log("adj",adj)
        let stack = []
        for(let i = 0 ; i < N ; i++){
            if(!visited[i]){
                this.topoSort(i,visited,adj,stack)
            }
        }

        console.log("stack",stack)
        //Not doing reverse

        //Step 2 - Relax the edges by taking out node from stack one by one
        let dist = Array(N).fill(-1)
         // Have to calculate distance from source
         //In this case source is 0
         dist[0] = 0
         while(stack.length>0){
            let vertex = stack.pop()
            for(let neighbor of adj[vertex]){
                console.log("fdf",neighbor,vertex)
                if(dist[neighbor[0]]===-1){
                    dist[neighbor[0]] = dist[vertex] + neighbor[1]
                }
                else{
                    dist[neighbor[0]] = Math.min(dist[neighbor[0]],dist[vertex] + neighbor[1])
                }
            }
         }

         console.log(dist)

         return dist

    }

    
}
let sol = new Solution()
sol.shortestPath(6,7,[[0,1,2],[0,4,1],[4,5,4],[4,2,2],[1,2,3],[2,3,6],[5,3,1]])
sol.shortestPath(4,2,[[0,1,2],[0,2,1]])