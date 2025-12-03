// Que :- Remove Duplicate from array

let arr = [2, 4, 6, 7, 7, 4, 9]; // sorted
let arr1 = [5, 2, 7, 4, 6, 2]; //unsorted

// Method 1 (set)
function RemoveDuplicate(arr) {
    if (arr.length === 0) return;
    return [...new Set(arr)];
}
console.log(RemoveDuplicate(arr));

// Method 2 (filter)

function RemoveDuplicateFromArr(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log(RemoveDuplicateFromArr(arr))

