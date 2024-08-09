// FIND FLOOR OF AN ELEMENT IN A SORTED ARRAY:

// Given a sorted array and a value x, the floor of x is the largest element in array smaller than or equal to x.
// Write efficient functions to find floor of x.

// Example:

// Input : arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 5
// Output : 2
// 2 is the largest element in arr[] smaller than 5.

const floorOfElement = (arr,ele) =>{
    let start = 0;
    let end = arr.length - 1;
    let res = -1;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        if(arr[mid]===ele){
            return arr[mid]
        }
        // since floor find krna h toh ele se chota candidate hi hoga
        //greatest ele smaller than target
        else if(ele>arr[mid]){
            res = arr[mid];
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return res;
}

console.log(floorOfElement([1, 2, 3 ,4, 8, 10, 10, 12, 19],5)) // 2