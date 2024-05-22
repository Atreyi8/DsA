// 207. Course Schedule
// Solved
// Medium
// Topics
// Companies
// Hint
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
var canFinish = function(numCourses, prerequisites) {
    let topoArr = []
    let indegree = Array(numCourses).fill(0)
    let graph = new Map()
  for (const [e, v] of prerequisites) {
    // build graph map for like adj list
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    // build indegree array
    indegree[e]++;
  }
  console.log(indegree,graph)
    let q = []
  for(let i = 0 ; i< numCourses; i++){
    if(indegree[i]===0){
        q.push(i)
    }

  }

  while(q.length>0){
    let node = q.shift()
    topoArr.push(node)
    if(graph.has(node)){
        for(const neighbor of graph.get(node)){
            indegree[neighbor]--
            if(indegree[neighbor]===0){
                q.push(neighbor)
            }
        }
    }
  }

  return numCourses===topoArr.length

}
