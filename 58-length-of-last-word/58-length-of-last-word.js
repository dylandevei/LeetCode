/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let split = s.split(' ')
    let noSpaces = split.filter(word => word !== '')
    return noSpaces[noSpaces.length-1].length
};