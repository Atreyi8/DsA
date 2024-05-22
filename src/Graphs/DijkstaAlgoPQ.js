
class MinHeap {
    constructor() {
    this.heap = [];
}

push(val){
    this.heap.push(val);
    this.heapifyUp(this.heap.length-1);
}

pop(){
    if(this.heap.length === 0) return null;
    if(this.heap.length === 1) return this.heap.pop();
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
}

top(){
    if(this.heap.length === 0) return null;
    return this.heap[0];
}  

size(){
    return this.heap.length;
}

heapifyUp(index) {
    while(index>0){
        let parentIndex = Math.floor((index-1)/2);
        if(this.heap[parentIndex][1] < this.heap[index][1]) break;
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
    }
}

heapifyDown(index) {
    let left = 2*index+1;
    let right = 2*index+2;
    let smallest = index;

    if(left < this.heap.length && this.heap[left][1] < this.heap[smallest][1]) smallest = left;
    if(right < this.heap.length && this.heap[right][1] < this.heap[smallest][1]) smallest = right;

    if(smallest!==index){
        [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
        this.heapifyDown(smallest);
    }
}
}
class Solution
{
//Function to find the shortest distance of all the vertices
//from the source vertex S.
dijkstra(V,Adj,S)
{
    let distance = Array(V).fill(Infinity)
    let minHeap = new MinHeap()
    minHeap.push([S,0])
    distance[S] = 0
    console.log("adj",Adj,minHeap)
    console.log(minHeap.size())
    while(minHeap.size()>0){
        let [node,dis] = minHeap.pop()
        console.log("node",node,dis,distance)
        for(let [neighborNode,edgeWeight] of Adj[node]){
            console.log("dsdcd",neighborNode,edgeWeight)
            if(dis + edgeWeight < distance[neighborNode]){
                distance[neighborNode] = dis + edgeWeight
                minHeap.push([neighborNode,distance[neighborNode] ])
            }
            
          
        }
    }
    //code here
    console.log(distance)
}


}
let V = 3, E = 3
adj = [[[1, 1], [2, 6]], [[2, 3], [0, 1]], [[1, 3], [0, 6]]]

S = 2;

sol = new Solution()
sol.dijkstra(V,adj,S)