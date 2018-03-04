module.exports = function check(str, bracketsConfig) {
    var chars = str.split(''),
        stack = [],
        open = [],
        close = [],
        closeIndex,
        openIndex;

    for (var r = 0; r<bracketsConfig.length;r++){
        open[r] = bracketsConfig[r][0];
        close[r] = bracketsConfig[r][1]
    }
    for (var i = 0; i < chars.length; i++) {
        openIndex = open.indexOf(chars[i]);
        if (openIndex !== -1) {
            stack.push(openIndex);
            continue;
        }
        closeIndex = close.indexOf(chars[i]);
        if (closeIndex !== -1) {
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};
