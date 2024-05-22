// } Driver Code Ends

//User function Template for javascript

class Solution {
  checkForBiparTite(start, colorArr, adj, V) {
    let queue = [];
    queue.push(start);
    colorArr[start] = 0;

    while (queue.length > 0) {
      let node = queue.shift();
      for (let neighbor of adj[node]) {
        //if neighbor not colored
        //console.log("neighbor",neighbor,node,colorArr)
        if (colorArr[neighbor] === -1) {
          colorArr[neighbor] = colorArr[node] === 1 ? 0 : 1;
          queue.push(neighbor);
        }
        //check if node and neighbor have same color
        else if (colorArr[node] === colorArr[neighbor]) {
          return false;
        }
      }
    }
    return true;
  }

  isBipartite(V, adj) {
    // console.log("adj123",adj)

    let colorArr = Array(V).fill(-1);
    //connected component code
    for (let i = 0; i < V; i++) {
      //if not colored
      if (colorArr[i] === -1) {
        if (this.checkForBiparTite(i, colorArr, adj, V) === false) {
          return false;
        }
      }
    }
    return true;
  }
}

let sol = new Solution();
console.log(
  sol.isBipartite(4, [
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ]),
);
