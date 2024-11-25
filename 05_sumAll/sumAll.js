const sumAll = function(a, b) {

    let finalSum = 0;
    let c = 0;

    if (a > b){
        c = b;
        b = a;
        a = c;
    }

    if (a < 0 || b < 0){
        return('ERROR');
    }
    if (Number.isInteger(a) && Number.isInteger(b)){

    for (let i = a; i <= b; i++){
        finalSum = finalSum + i;
    }

    return finalSum;
}
else {
    return('ERROR');
}

};

// Do not edit below this line
module.exports = sumAll;
