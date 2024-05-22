class Solution {

    topoSort(node, visited, adj, stack) {
        visited[node] = 1;
        if (adj[node]) {
            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    this.topoSort(neighbor, visited, adj, stack);
                }
            }
        }
        stack.push(node);
    }

    minimumStep(n) {
        // Initialize adjacency list for one-based indexing
        let adj = Array(n + 1).fill().map(() => []);
        
        for (let i = 1; i <= n; i++) {
            let first = i + 1;
            let second = i * 3;
            if (first <= n) {
                adj[i].push(first);
            }
            if (second <= n) {
                adj[i].push(second);
            }
        }
        
        console.log("final", adj);
        
        // Topological sort
        let visited = Array(n + 1).fill(0);
        let stack = [];
        
        for (let i = 1; i <= n; i++) {
            if (!visited[i]) {
                this.topoSort(i, visited, adj, stack);
            }
        }
        console.log(visited)

        console.log("stack", stack);

        let dist = Array(n + 1).fill(-1);
        dist[1] = 0;

        while(stack.length>0){
            let vertex = stack.pop()
            if(adj[vertex] && adj[vertex].length>0){
            for(let neighbor of adj[vertex]){
                console.log("fdf",neighbor,vertex)
                if(dist[neighbor]===-1){
                    dist[neighbor] = dist[vertex] + 1
                }
                else{
                    dist[neighbor] = Math.min(dist[neighbor],dist[vertex] + 1)
                }

            }
        }
        }

        console.log(dist)
        return dist[n];
    }
}

let sol = new Solution();
sol.minimumStep(4);
