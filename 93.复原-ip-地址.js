/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = []
    let path = []
    function setItem(i) {
        const len = path.length
        if (len > 4) return
        if (len === 4 && i === s.length) {
            result.push(path.join("."))
        }
        for(let j = i; j < s.length; j++) {
            const str = s.substr(i, j-i +1);
            if (str.length > 3 || +str > 255) break
            if (str.length > 1 && str[0] === "0") break;
            path.push(str)
            setItem(j + 1)
            path.pop()
        }
    }
    setItem(0)
    return result

};
// @lc code=end

