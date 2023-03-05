function findMin(arr){
  let min=arr[0];
  for(let i=1; i<arr.length; i++){
    if(arr[i]<min){
      min=arr[i];
    }
  }
  return min;
}

function mySort(arr){
  let newArr=[];
  while (arr.length>0){
    let min= findMin(arr);
    newArr.push(min);
    arr.splice(arr.indexOf(min),1);
  }
  return newArr;
}


/**my solution, can't work well */
// function mySort(arr) {
//   let newArr=[];
//   for (let i = 0; i < arr.length; i++) {
//     let counter = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] < arr[i]) {
//         counter++;
//       }
//     }
//    newArr[counter]=arr[i]
//     }
//     return newArr;
//   }


  console.log(mySort([17, 0, -3, 2, 1, 0.5])); // returns [-3, 0, 0.5, 1, 2, 17]
  console.log(mySort([3, 0, 8, 2, 1, 6])); 
  console.log(mySort([9, 4, 8, 1, 9,0.5])); 










// let arr=[];
// arr[0]= 3;
// arr[3]=5;
// console.log(arr);
