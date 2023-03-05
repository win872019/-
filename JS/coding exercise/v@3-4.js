/*T's better*/
/*my solution*/

function findDuplicate(arr) {
    if(arr.length==0){
        return false;
    }

    for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr.length;j++){
            if(i==j){
                continue;
            }
            if(arr[i]==arr[j]){
                return true;
            }
        }
    }
    return false;
}


console.log(findDuplicate([1, 3, 5, 7, 9, 3])); // returns true
console.log(findDuplicate([])); // returns false
console.log(findDuplicate([3, 4, 5, 6, 7, 10000, 0])); // returns false 
console.log(findDuplicate([9, 4, 5, 100, 7, 100, 0]));
