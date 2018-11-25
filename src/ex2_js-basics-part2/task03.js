function getNumberType(arr){
    var even = 0;
    var odd = 0;
    var nullValue = 0;
    for(var i = 0; i<arr.length;i++){
        if(arr[i]===0){
            ++nullValue;
        } else if(arr[i]%2 === 0){
            ++even;
        }else {
            ++odd;
        }
    }
    console.log("четных чисел: " + even + "; нечетных чисел: " + odd + "; ноль: " + nullValue)
}
getNumberType([1,5,3,1,4,74,7]);
