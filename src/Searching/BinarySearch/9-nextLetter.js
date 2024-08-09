// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

var nextGreatestLetter = function(letters, target) {
    let start = 0;
    let end = letters.length -1;
    let res = "#"
    while(start<=end){
     
        let mid = start + Math.floor((end-start)/2);
        if(letters[mid]===target){
            start = mid + 1;
        }
        else if(target>letters[mid]){
           
          start = mid + 1;
        }
        else{
           
            end = mid -1;
            res = letters[mid]
            
        }
    }
    console.log(res)
    return res==="#"?letters[0]:res
};

nextGreatestLetter(["c","f","j"],"a")