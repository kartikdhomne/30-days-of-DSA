// Find index of target element(linear search)

let arr = [3, 2, 5, 8, 4, 7]

target = 3


// Binary Search
function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

console.log(searchInsert(arr, 5))
