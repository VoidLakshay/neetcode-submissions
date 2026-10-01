class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sorted = s.split("").sort().join("")
        let sortedT = t.split("").sort().join("")
       if(sorted === sortedT)
        return true;
        return false
    }
}
