const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    }
    else{
    let finalString = "";
    for (let i = 0; i < num; i++){
        finalString = finalString + string;
    }
    return finalString;
}
};

// Do not edit below this line
module.exports = repeatString;
