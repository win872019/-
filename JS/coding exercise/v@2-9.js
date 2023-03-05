function findMin(arr){
    if(arr.length==0){
        console.log(undefined);
        return undefined;
    }
    let num = 10000000;
    for(let i=0; i<arr.length;i++){
        if(arr[i]<num){
            num= arr[i];
        }
    }
    console.log(num);
    return num;

}


findMin([1, 2, 5, 6, 99, 4, 5]); // returns 1
findMin([]); // returns undefined
findMin([1, 6, 0, 33, 44, 88, -10]); // returns -10