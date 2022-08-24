/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = x.toString().split('').reverse().join('')
    let string = x.toString()
    if (string === reverse){
        return true
    } else {
        return false
    }
};