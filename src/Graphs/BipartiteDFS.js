


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} v
 * @param {number} e
 * @returns {boolean}
*/

class Solution {
    dfs (start,color,colorArr,adj){
        
    colorArr[start] = color
    for(let neighbor of adj[start]){
      
        if(colorArr[neighbor]===-1){
              
              let colorToFill = color===0?1:0
              console.log("@@",neighbor,colorToFill,color,start,colorArr,adj[start])
            this.dfs(neighbor,colorToFill,colorArr,adj)
        }
        else if(colorArr[neighbor]===color){
             console.log("##",neighbor,color,start,colorArr,adj[start])
            return false
        }
    }
    return true
   
    }
    
    isBipartite(V,adj)
    {
   
    let colorArr = Array(V).fill(-1);

 
    for (let i = 0; i < V; i++) {
        if (colorArr[i] === -1) {
            if (this.dfs(i, 0, colorArr, adj) === false) {
                return false;
            }
        }
    }
    return true;

    }
}