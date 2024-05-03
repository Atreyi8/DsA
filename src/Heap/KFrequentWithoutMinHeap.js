// Find K most occurring elements in the given Array
// Given an array of N numbers and a positive integer K. 
//The problem is to find K numbers with the most occurrences, i.e., the top K numbers having the maximum frequency.
// If two numbers have the same frequency then the number with a larger value should be given preference.
// The numbers should be displayed in decreasing order of their frequencies. It is assumed that the array consists of at least K numbers.

// Examples: 

// Input: arr[] = {3, 1, 4, 4, 5, 2, 6, 1}, K = 2
// Output: 4 1
// Explanation:
// Frequency of 4 = 2, Frequency of 1 = 2
// These two have the maximum frequency and 4 is larger than 1.

// Input: arr[] = {7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9}, K = 4
// Output: 5 11 7 10
// Explanation: 
// Frequency of 5 = 3, Frequency of 11 = 2, Frequency of 7 = 2, Frequency of 10 = 1
// These four have the maximum frequency and 5 is largest among rest.



//#################### Without Heap Solution ########################


const kFrequent = (arr,k) =>{
    let mapObj = new Map();
    for(let i = 0 ; i < arr.length ; i++){
        mapObj.set(arr[i],mapObj.get(arr[i])+1 || 1)
    }
    let q = [...mapObj]
    console.log("q",q)
    q.sort((a,b)=>{
        if(a[1]===b[1]){
            return b[0]-a[0]
        }
        else{
            return b[1]-a[1]
        }
    })
    console.log(q)
    for(let i = 0 ; i < k ; i++){
        console.log(q[i][0])
    }

    
}

console.log(kFrequent([3, 1, 4, 4, 5, 2, 6, 1],2))