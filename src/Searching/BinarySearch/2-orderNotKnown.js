// search an element in a sorted array of unknown order , it can be either ascending or descending

const orderNotKnownBinarySearch = (arr, target) => {
    if (arr.length === 0) return -1;
    if(arr.length === 1) return arr[0] === target?0:-1;

    let order = "asc";
    if(arr[0]>arr[1]){
        order = "desc";
    }

    let start = 0;
    let end = arr.length - 1;   

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

console.log(orderNotKnownBinarySearch([7,5,4,2,0],2)) // 6
// [1,2,3,4,5,6,7,8,9]