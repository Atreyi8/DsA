//Intution is to take indegree matrix
// How to create is like 2->{3} in adj matrix
//so while iterating adj matrix when we encounter 2, we will increase indegree of 3 by 1
//So whatever node has indegree 0 , we will push it in queue
//Till queue has length > 0 , we will pop the node and push it in topo array
//and decrease the indegree of its neighbor by 1, as it is in topo array so it is not providing any degree to its neighbor.
class Solution 
{
   
    //Function to return list containing vertices in Topological order.
    topoSort(V, adj)
    {
       //create indegree array
       let indegree = Array(V).fill(0)
       for(let i = 0 ; i < V ; i++){
           for(const neighbor of adj[i]){
               indegree[neighbor]++
           }
       }
       let q = []
       let topo = []
       for(let i = 0 ; i < V ; i++){
           if(indegree[i]===0){
               q.push(i)
           }
       }
       
       while(q.length>0){
           let node = q.shift()
           topo.push(node)
           //node is in topo sort , so remove the degree its providing to its neighbor
           for(let neighbor of adj[node]){
               indegree[neighbor]--
               if(indegree[neighbor]===0){
                   q.push(neighbor)
               }
           }
       }
       
       return topo
       
    }
    
    
}

