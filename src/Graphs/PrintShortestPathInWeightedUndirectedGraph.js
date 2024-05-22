// Shortest Path in Weighted undirected graph

// banner
// You are given a weighted undirected graph having n vertices numbered from 1 to n and m edges describing there are edges between a to b with some weight, find the shortest path between the vertex 1 and the vertex n and if path does not exist then return a list consisting of only -1.

// Note -
// 1. If there exists a path, then return a list whose first element is the weight of the path.
// 2. If no path exists then return a list containing a single element -1.

// Example:
// Input:
// n = 5, m= 6
// edges = [[1,2,2], [2,5,5], [2,3,4], [1,4,1],[4,3,3],[3,5,1]]
// Output:
// 5 1 4 3 5
// Explaination:
// Shortest path from 1 to n is by the path 1 4 3 5 whose weight is 5.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function shortestPath() which takes n vertex and m edges and vector of edges having weight as inputs and returns the shortest path between vertex 1 to n.

// Expected Time Complexity: O(m* log(n))
// Expected Space Complexity: O(n)

// Constraint:
// 2 <= n <= 105
// 0 <= m <= 105
// 0<= a, b <= n
// 1 <= w <= 105
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  top() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  heapifyUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][1] < this.heap[index][1]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  heapifyDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    if (left < this.heap.length && this.heap[left][1] < this.heap[smallest][1])
      smallest = left;
    if (
      right < this.heap.length &&
      this.heap[right][1] < this.heap[smallest][1]
    )
      smallest = right;

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      this.heapifyDown(smallest);
    }
  }
}

class Solution {
  shortestPath(n, m, edges) {
    let adj = Array(n + 1)
      .fill()
      .map(() => []);

    // Populate adjacency list with edges
    for (let i = 0; i < m; i++) {
      console.log(adj, i, edges[i]);
      let x = edges[i][0];
      let y = edges[i][1];
      let w = edges[i][2];

      adj[x].push([y, w]);
      adj[y].push([x, w]);
    }
    let distance = Array(n + 1).fill(Infinity);
    let parent = Array(n + 1)
      .fill()
      .map((_, index) => index);
    distance[1] = 0;
    let minHeap = new MinHeap();
    minHeap.push([1, 0]);

    while (minHeap.size() > 0) {
      let [node, weight] = minHeap.pop();
      for (let [neighbor, neighWeight] of adj[node]) {
        if (distance[neighbor] > weight + neighWeight) {
          distance[neighbor] = weight + neighWeight;
          parent[neighbor] = node;
          minHeap.push([neighbor, distance[neighbor]]);
        }
      }
    }

    if (distance[n] === Infinity) return [-1];

    let node = n;
    let path = [];
    while (parent[node] !== node) {
      console.log(node);
      path.push(node);
      node = parent[node];
    }
    path.push(1);
    console.log(path.reverse());
  }
}

let sol = new Solution();
sol.shortestPath(5, 6, [
  [1, 2, 2],
  [2, 5, 5],
  [2, 3, 4],
  [1, 4, 1],
  [4, 3, 3],
  [3, 5, 1],
]);
