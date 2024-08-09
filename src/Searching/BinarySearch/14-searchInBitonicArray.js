/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */

var findPeak = (arr) =>{
    let low = 0;
    let high = arr.length -1
    while(low<=high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]){
            return mid
        }
        else if(arr[mid+1]>arr[mid]){
            low = mid +1
        }
        else{
            high = mid -1
        }
    }
    return -1
}

const orderNotKnownBinarySearch = (arr, start, end, target) => {
   

    let order = "asc";
    if(arr[start]>arr[start+1]){
        order = "desc";
    }



    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]=== target){
            return mid
        }
        else if(arr[mid]>target){
            if(order==="asc"){
                end = mid - 1;
            }
            else{
                start = mid + 1;
            }
        }
        else{
            if(order==="asc"){
                start = mid + 1;
            }
            else{
                end = mid - 1;
            }
        }
    }
    return -1
};
var findInMountainArray = function(target, mountainArr) {
    let peakElement = findPeak(mountainArr)
    console.log("peak",peakElement)
    let ascArrayFind = orderNotKnownBinarySearch(mountainArr,0,peakElement-1,target)
    let descArrayFind = orderNotKnownBinarySearch(mountainArr,peakElement,mountainArr.length-1,target)
    console.log(ascArrayFind,descArrayFind)
    return Math.min(ascArrayFind,descArrayFind)
    
};

console.log(findInMountainArray(3,[1,2,3,4,5,3,1])) // 2