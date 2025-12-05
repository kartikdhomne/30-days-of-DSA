// Second Largest Number

let arr = [7, 2, 5, 3, 9, 1]


// Method 1
function secondLargest(arr) {
    let res = [...new Set(arr)].sort((a, b) => b - a)
    return res[1]
}

console.log(secondLargest(arr))