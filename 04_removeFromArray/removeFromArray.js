const removeFromArray = function(Arr,number) {
    let len = Array(Arr).length;
    for(let i = 0; i<len; i++){
        if(Arr[i] == number)
            Array(Arr[i]).pop;
    }
    return Arr;
};

// Do not edit below this line
module.exports = removeFromArray;
