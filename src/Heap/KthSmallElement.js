//IP - [7,10,4,3,20,15] , K = 3
//OP - 7
//Find Kth smallest element in an array

class MaxHeap {
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
      if (this.heap[parentIndex] > this.heap[index]) break;
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
    let largest = index;

    if (left < this.heap.length && this.heap[left] > this.heap[largest])
      largest = left;
    if (right < this.heap.length && this.heap[right] > this.heap[largest])
      largest = right;

    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];
      this.heapifyDown(largest);
    }
  }
}

const ksmallestElement = (arr, k) => {
  let maxHeap = new MaxHeap();
  for (let i = 0; i < arr.length; i++) {
    maxHeap.push(arr[i]);
    if (maxHeap.size() > k) {
      maxHeap.pop();
    }
  }
  return maxHeap.top();
};

console.log(ksmallestElement([6, 7, 8, 10, 4, 3, 20, 15], 3)); //7
