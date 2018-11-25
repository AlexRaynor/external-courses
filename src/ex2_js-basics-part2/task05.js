function getMax(arr){
    var max = arr[0];
    for(var i = 1; i< arr.length;i++){
        if (arr[i]>max){
            max = arr[i];
        }
    }
    console.log("Максимальное значение: " + max)
}
getMax([1,2,3,9,35,4]);
