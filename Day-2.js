// TWO SUM to target

let arr = [2, 7, 4, 9, 0, 3, 6];
let arr2 = [2, 3, 4, 5, 6, 7];
target = 5;

// Method 1( Hashmap )

const TwoSum = (arr, target) => {
    if (arr.length === 0) return;

    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
};

console.log(TwoSum(arr, target));

// Mathod 2 ( Two Pointers only if input array is sorted)

const TwoSumTwoPointers = (arr, target) => {
    if (arr.length === 0) return;

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            return left++;
        } else {
            return right--;
        }
    }
    return null;
};

console.log(TwoSum(arr2, target));
