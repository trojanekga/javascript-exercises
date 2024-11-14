const reverseString = function(string) {
    let str1 = string;
    let backString = "";
    
    let split_string = str1.split("");
    let strLength = split_string.length;
    for (let i = 0; i < strLength; i++){
        backString = backString + split_string.pop();
    }
    return backString;
};

// Do not edit below this line
module.exports = reverseString;
