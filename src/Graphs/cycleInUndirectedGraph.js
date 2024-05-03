//{ Driver Code Starts
// Initial Template for javascript
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  for (let i = 0; i < t; i++) {
    let input_line = readLine().split(" ");
    let V = parseInt(input_line[0]);
    let E = parseInt(input_line[1]);

    let adj = new Array(V);
    for (let i = 0; i < V; i++) {
      adj[i] = new Array();
    }
    for (let i = 0; i < E; i++) {
      input_line = readLine().split(" ");
      let x = input_line[0];
      let y = input_line[1];
      adj[x].push(y);
      adj[y].push(x);
    }

    let obj = new Solution();
    let ans = obj.isCycle(V, adj);
    if (ans) ans = 1;
    else ans = 0;
    console.log(ans);
  }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
 */
class Solution {
  // Function to detect cycle in an undirected graph.

  dfs(node, parent, adj, visited) {
    visited[node] = 1;
    for (const neighbor in adj[node]) {
      console.log(neighbor);
      if (!visited[neighbor]) {
        let result = this.dfs(neighbor, node, adj, visited);
        if (this.dfs(neighbor, node, adj, visited) === true) {
          return true;
        }
      } else {
        if (parent !== neighbor) {
          return true;
        }
      }
    }
    return false;
  }
  isCycle(V, adj) {
    // code here
    let visited = Array(V);

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        if (this.dfs(i, -1, adj, visited) === true) return true;
      }
    }
    return false;
  }
}

const sol = new Solution();
console.log(
  sol.isCycle(4, [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 1],
  ])
); //true
