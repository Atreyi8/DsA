//Search ele in Rotated Array
// Input - [15, 18, 2, 3, 6, 12] , search 18
// Output - 1

//So from finding index of min element in rotated array will give us the pivot point , i.e how many times array is rotated
//Then we can search the element in both the subarrays , using Binary Search

const findNoOfTimesArrayRotated = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        let next = (mid + 1)%arr.length;
        let prev = (mid + arr.length - 1) % arr.length;
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

const binarySearch = (arr, start, end, target) => {
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]=== target){
            return mid
        }
        else if(arr[mid]>target){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    return -1;
}

const searchEleInRotatedArray = (arr, target) => {
    let pivot = findNoOfTimesArrayRotated(arr);
    let left = binarySearch(arr, 0, pivot-1, target);
    let right = binarySearch(arr, pivot, arr.length-1, target);
    console.log(left, right)
    return Math.max(left, right);
}

console.log(searchEleInRotatedArray([15, 18, 2, 3, 6, 12], 6)) // 1