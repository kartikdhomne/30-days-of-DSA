// Reverse Array

let arr = [2, 4, 5, 6, 3, 1];

//Method 1
// let res = arr.reverse()

// Method 2 (for loop)
// function arrayReverse(arr) {
//     let result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result.push(arr[i]);
//     }
//     return result;
// }

// Method 3 (While Loop)
// function ReverseWhile(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[right]];
//         left++;
//         right--;
//     }
//     return arr;
// }
console.log(ReverseWhile(arr));
