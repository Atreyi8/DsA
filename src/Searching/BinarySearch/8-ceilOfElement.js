// CEILING OF AN ELEMENT IN A SORTED ARRAY:

// Given a sorted array and a value x, the ceiling of x is the smallest element in array greater than or equal to x, 
//and the floor is the greatest element smaller than or equal to x. Assume than the array is sorted in non-decreasing order. 
//Write efficient functions to find floor and ceiling of x.

// Examples :

// For example, let the input array be {1, 2, 8, 10, 10, 12, 19}
// For x = 0:    floor doesn't exist in array,  ceil  = 1
// For x = 1:    floor  = 1,  ceil  = 1
// For x = 5:    floor  = 2,  ceil  = 8
// For x = 20:   floor  = 19,  ceil doesn't exist in array

const ceilOfElement = (arr,ele) =>{
    let start = 0;
    let end = arr.length - 1;
    let res = -1;

    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]===ele){
            return arr[mid]
        }
        else if(ele>arr[mid]){
            start = mid + 1;
        }
        // smallest of greater elements
        else{
            end = mid - 1;
            res = arr[mid]
        }
    }
    return res
}

console.log(ceilOfElement([1, 2, 3 ,4, 8, 10, 10, 12, 19],13))    