// find the count of element number occured in sorted array


const getFirstOccurence = (arr,target) => {
    let start = 0;
    let end = arr.length - 1;
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

const getLastOccurence = (arr,target) => {
    let start = 0;
    let end = arr.length - 1;
    let res = -1;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]===target){
            res = mid;
            start = mid +1;
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
const countOfElement = (arr, target) => {
    let firstOccurence = getFirstOccurence(arr, target);
    let lastOccurence = getLastOccurence(arr, target+1);

    console.log(firstOccurence, lastOccurence)
    return lastOccurence - firstOccurence + 1;
}

console.log(countOfElement([1,2,3,3,3,3,4,5,6,7],3)) // 4