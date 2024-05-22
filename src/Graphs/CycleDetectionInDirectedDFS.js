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
    }

    let obj = new Solution();
    let ans = obj.isCyclic(V, adj);
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
  dfsCheck(start, vis, pathVis, adj) {
    vis[start] = 1;
    pathVis[start] = 1;

    for (let neighbor of adj[start]) {
      //if not visited
      if (!vis[neighbor]) {
        if (this.dfsCheck(neighbor, vis, pathVis, adj) === true) {
          return true;
        }
      }
      //if visited also path visited
      else if (vis[neighbor] && pathVis[neighbor]) {
        return true;
      }
    }
    //if no node and going back , make path visited back to 0
    pathVis[start] = 0;
    return false;
  }
  // Function to detect cycle in a directed graph.
  isCyclic(V, adj) {
    let vis = Array(V).fill(0);
    let pathVis = Array(V).fill(0);

    for (let i = 0; i < V; i++) {
      if (!vis[i]) {
        if (this.dfsCheck(i, vis, pathVis, adj) === true) {
          return true;
        }
      }
    }
    return false;
    // code here
  }
}
