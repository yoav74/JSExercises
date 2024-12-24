const reverseString = function (text) {
    let chararray = '';
    const len = String(text).length;
    for (let i = len; i >= 0; i--) {
        chararray += String(text).charAt(i);
    }
    return chararray;
};

// Do not edit below this line
module.exports = reverseString;
