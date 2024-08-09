// Given an infinite sorted array consisting 0s and 1s. 
//The problem is to find the index of first ‘1’ in that array. 
//As the array is infinite, therefore it is guaranteed that number ‘1’ will be present in the array.

// Example:

// Input : arr[] = {0, 0, 1, 1, 1, 1} 
// Output : 2

const indexOfFirst1BinaryNo = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while(1>arr[end]){
        start = end;
        end = end*2;
    }
    return firstOccurence(arr, 1, start, end);
};

const firstOccurence = (arr, target, start, end) => {
    let res = -1;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]===target){
            res = mid;
            end = mid -1;
        }
        else if(arr[mid]>target){
            end = mid -1;
        }
        else{
            start = mid +1;
        }   
    }
    return res
}

console.log(indexOfFirst1BinaryNo([0, 0,0, 1, 1, 1, 1])) // 2