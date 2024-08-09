// Find Number of times array is rotated 
// Input - [15, 18, 2, 3, 6, 12]
// Output - 2

const findNoOfTimesArrayRotated = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        let next = (mid+1)%arr.length;
        let prev = (mid+arr.length-1)%arr.length;
        if(arr[mid]<arr[next] && arr[mid]<arr[prev]){
            return mid
        }
        else if(arr[start]<=arr[mid]){
            start = mid + 1;
        }
        else if(arr[mid]<=arr[end]){
            end = mid - 1;
        }
    }
    return 0;
};

console.log(findNoOfTimesArrayRotated([2, 3, 6, 12,15,17,18])) // 2