// Find Min and Max element from array

let arr = [1, 4, 2, 6, 8, 3, 9]


function MaxVal(arr) {
    let res = [...arr].sort((a, b) => b - a);
    return res[0];
}
console.log(MaxVal(arr))

function MinVal(arr) {
    let res = [...arr].sort((a, b) => a - b);
    return res[0];
}
console.log(MinVal(arr))

const Max = arr => Math.max(...arr);
console.log(Max(arr))
const Min = arr => Math.min(...arr);
console.log(Min(arr))
