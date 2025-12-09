// Remove duplicates from sorted array


let arr = [3, 1, 7, 1, 5, 2, 4, 5]
let arr2 = [1, 1, 3, 6, 7, 7, 9]


// Method 1
function RemoveDuplicate(arr) {
    if (arr.length === 0) return;

    return [...new Set(arr)]
}

//Method 2 (Two Pointers)

function RemoveDuplicates(arr) {
    if (arr.length === 0) return;

    let left = 0;

    for (right = 1; right < arr.length; right++) {
        if (arr[right] !== arr[left]) {
            left++
            arr[left] = arr[right]
        }
    }

    return arr.slice(0, left + 1);;
}

console.log(RemoveDuplicates(arr2))


// | Feature                      | `slice()`                   | `splice()` |
// | ------------------------    | ----------------------------| ------------------------------- |
// | Modifies original array ?  | ❌ No                       | ✅ Yes |
// | Returns                   | A copy of selected elements  | The removed elements     |
// | Use case                 | Non - destructive extraction | Add / Remove / Replace elements |


// Examples 
let arr3 = [1, 2, 3, 4, 5];

console.log(arr3.slice(1, 3));  // [2, 3]
console.log(arr3);             // [1,2,3,4,5]  unchanged

console.log(arr3.splice(1, 3)); // [2, 3, 4]
console.log(arr3);              // [1, 5]  modified


//     | Metric        | Value |
// | ----------------  | ----------------------------------- |
// | Time Complexity   | ** O(n) ** (single pass)              |
// | Space Complexity  | ** O(1) ** (in -place, no extra array) |



// 📌 Interview Explanation(What to say)

// “Since the array is sorted, duplicates will always be adjacent.
// I use two pointers: one pointer(i) tracks the position of the last unique number, and the second pointer(j) scans the array.
// Whenever I see a number that differs from nums[i], I move i forward and replace its value.
// This keeps all unique values at the beginning of the array in O(n) time and O(1) space.”