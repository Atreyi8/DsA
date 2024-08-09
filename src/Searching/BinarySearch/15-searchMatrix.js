// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length
    let m = matrix[0].length
    console.log(n,m)
    let i = 0;
    let j = m-1;
    console.log(i,j)
    while(i>=0 && i<n && j>=0 && j<m){
       console.log("at start",i ,j)
        if(matrix[i][j]===target){
         
            return true
        }
        else if(matrix[i][j]>target){
            j--;
        }
        else if(matrix[i][j]< target){
            console.log("i am here")
            i++;
        }
    }
    return false
};

console.log(searchMatrix([[1,1]],1)) // true