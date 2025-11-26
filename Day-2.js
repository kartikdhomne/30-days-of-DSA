// TWO SUM to target

let arr = [2, 7, 4, 9, 0, 3, 6];
let arr2 = [2, 3, 4, 5, 6, 7];
target = 11;


const TwoSum = (arr, target) => {
    if (arr.length === 0) return;

    const map = new Map()

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]

        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(arr[i], i)
    }

}

console.log(TwoSum(arr2, target));