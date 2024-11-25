const removeFromArray = function(arr, args) {
    args = args;
    arr = arr;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == args){
            arr = arr.slice(i);
        }
        
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
