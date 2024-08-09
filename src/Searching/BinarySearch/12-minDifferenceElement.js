//Given a sorted array, find the element in the array which has minimum difference with the given number. . 
//Input : arr[] = {1, 3, 8, 10, 15}, x = 12
//diff - [1-12,3-12,8-12,10-12,15-12] = [11,9,4,2,3]
//so 10 wala element se 12 ka difference minimum h
//Output : 10

//so what we can do is we can find ceil and floor and then comapre sabse min difference wala element return krdo

const ceilOfElement = (arr,ele) =>{
    let low = 0;
    let high = arr.length - 1;
    let res = -1;
    while(low<=high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid]===ele){
            return arr[mid]
        }
        else if(ele>arr[mid]){
            low = mid + 1;
        }
        else{
            high = mid - 1;
            res = arr[mid]
        }
    }
    return res;
};

const floorOfElement = (arr,ele) =>{
        let low = 0;
        let high = arr.length - 1;
        let res = -1;
        while(low<=high){
            let mid = low + Math.floor((high-low)/2);
            if(arr[mid]===ele){
                return arr[mid]
            }
            else if(ele>arr[mid]){
                res = arr[mid];
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
        }
        return res;
}

const findMinDiffElement = (arr,ele) =>{
    let ceil = ceilOfElement(arr,ele);
    let floor = floorOfElement(arr,ele);
    
    if(ceil - ele < ele - floor){
        return ceil;
    }
    else{
        return floor;
    }
}

console.log(findMinDiffElement([1, 3, 8, 10, 15],13)) // 10