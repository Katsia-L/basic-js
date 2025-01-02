const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = '';
  let count = 1;
  let i = 1;

  while (i <= str.length) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      encoded += (count > 1 ? count : '') + str[i - 1];
      count = 1;
    }
    i++;
  }
  return encoded;
}

module.exports = {
  encodeLine
};
