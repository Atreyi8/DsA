// Given an array of n elements, where each element is at most k away from its target position, devise an algorithm that sorts in O(n log k) time. For example, let us consider k is 2, an element at index 7 in the sorted array, can be at indexes 5, 6, 7, 8, 9 in the given array.

// Example:
// Input : arr[] = {6, 5, 3, 2, 8, 10, 9}
// k = 3
// Output : arr[] = {2, 3, 5, 6, 8, 9, 10} .

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
    console.log("#$R$$$", this.heap);
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    console.log("!!!", root, this.heap);
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
      if (this.heap[parentIndex] < this.heap[index]) break;
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
    console.log("heapify", left, right, smallest, this.heap);
    if (left < this.heap.length && this.heap[left] < this.heap[smallest])
      smallest = left;
    if (right < this.heap.length && this.heap[right] < this.heap[smallest])
      smallest = right;

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      console.log("@@@@", this.heap, smallest);
      this.heapifyDown(smallest);
    }
  }
}

const ksortedArray = (arr, k) => {
  let minHeap = new MinHeap();
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    minHeap.push(arr[i]);
    if (minHeap.size() > k) {
      temp.push(minHeap.pop());
    }
  }

  while (minHeap.size() > 0) {
    temp.push(minHeap.pop());
  }

  return temp;
};

console.log(ksortedArray([6, 5, 3, 2, 8, 10, 9], 3));
