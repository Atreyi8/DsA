// SEARCH IN A NEARLY SORTED ARRAY:

// Given an array which is sorted, but after sorting some elements are moved to either of the adjacent positions, 
//i.e., arr[i] may be present at arr[i+1] or arr[i-1]. Write an efficient function to search an element in this array. 
//Basically the element arr[i] can only be swapped with either arr[i+1] or arr[i-1].

// For example consider the array {2, 3, 10, 4, 40}, 4 is moved to next position and 10 is moved to previous position.

// Example :
// Input: arr[] =  {10, 3, 40, 20, 50, 80, 70}, key = 40
// Output: 2 
// Output is index of 40 in given array

const searchInNearlySortedArray = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]===target){
            return mid
        }
        else if(mid-1>=start && arr[mid-1]===target){
            return mid-1
        }
        else if(mid+1<=end && arr[mid+1]===target){
            return mid+1
        }
        else{
            if(arr[mid]>target){
                end = mid - 2;
            }
            else{
                start = mid + 2;
            }
        }
    }
    return -1;
};

console.log(searchInNearlySortedArray([10, 3, 40, 20, 50, 80, 70], 3)) // 2