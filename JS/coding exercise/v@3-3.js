/*T's better*/
/*my solution*/

function confirmEnding(str1, str2) {
    let s1="";
   for(let i = [str1.length-str2.length]; i<str1.length;i++){
       s1+=str1[i];
   }
   if(s1==str2){
       return true;
   }
   return false;
  }


console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Connor", "n")); // false
console.log(confirmEnding("Open sesame", "same")); // true
console.log(confirmEnding("hello how are you", " wyou"))
