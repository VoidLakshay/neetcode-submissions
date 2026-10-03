class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        // frequency count
        for (let num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }

        // Map → Array
        let arr = [...map.entries()];

        // frequency descending
        arr.sort((a, b) => b[1] - a[1]);

        // first k elements
        return arr.slice(0, k).map(item => item[0]);
    }
}