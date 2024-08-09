// Binary Search on Reverse Sorted array
const binarySearch = (arr, target) => {

    let start = 0;
    let end = arr.length - 1;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]=== target){
            return mid
        }
        else if(arr[mid]>target){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
        console.log(start,end)
    }
    return -1;
};

console.log(binarySearch([9,8,7,6,5,4,3,2,1],7))