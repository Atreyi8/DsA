
class Solution {
  
    // Function to detect cycle in a directed graph.
    isCyclic(V, adj) {
       let indegree = Array(V).fill(0)
       for(let i = 0 ; i < V ; i++){
           for(let neighbor of adj[i]){
               indegree[neighbor]++
           }
       }
       
       let q = []
      
       //instead of topoArray using count , because we dont need to return elements
       let count = 0
       
       for(let i = 0 ; i < V ; i++){
           if(indegree[i]===0){
               q.push(i)
           }
       }
       
       while(q.length>0){
           let node = q.shift()
           count++
           for(let neighbor of adj[node]){
               indegree[neighbor]--
               if(indegree[neighbor]===0){
                   q.push(neighbor)
               }
           }
       }
      
       return count===V?false:true
       
    }
}