// Find K most occurring elements in the given Array
// Given an array of N numbers and a positive integer K. 
//The problem is to find K numbers with the most occurrences, i.e., the top K numbers having the maximum frequency.
// If two numbers have the same frequency then the number with a larger value should be given preference.
// The numbers should be displayed in decreasing order of their frequencies. It is assumed that the array consists of at least K numbers.

// Examples: 

// Input: arr[] = {3, 1, 4, 4, 5, 2, 6, 1}, K = 2
// Output: 4 1
// Explanation:
// Frequency of 4 = 2, Frequency of 1 = 2
// These two have the maximum frequency and 4 is larger than 1.

// Input: arr[] = {7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9}, K = 4
// Output: 5 11 7 10
// Explanation: 
// Frequency of 5 = 3, Frequency of 11 = 2, Frequency of 7 = 2, Frequency of 10 = 1
// These four have the maximum frequency and 5 is largest among rest.



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
            if(this.heap[parentIndex][0] < this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    heapifyDown(index) {
        let left = 2*index+1;
        let right = 2*index+2;
        let smallest = index;

        if(left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
        if(right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]) smallest = right;

        if(smallest!==index){
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            this.heapifyDown(smallest);
        }
    }
}


const kFrequent = (arr,k) =>{
    let topNumbers = []
    let mapObj = new Map();
    for(let i = 0 ; i < arr.length ; i++){
        mapObj.set(arr[i],mapObj.get(arr[i])+1 || 1)
    }
    console.log(mapObj)

    let minHeap = new MinHeap();
    for (let [num, frequency] of mapObj) {
        minHeap.push([frequency, num]);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }

    console.log(minHeap.heap)
  
    while(minHeap.size()>0){
        topNumbers.push(minHeap.pop()[1])
    
    }
return topNumbers
    
}

console.log(kFrequent([3, 1, 4, 4, 5, 2, 6, 1],2))