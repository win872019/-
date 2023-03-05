function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newStr+= str[i];
  }
  return newStr;
}


console.log(reverse("abcd")); // returns "dcba"
console.log(reverse("I am a good guy.")); // returns ".yug doog a am I"

// let a="";
// a.push()
// console.log(a.length);
