function isUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  return str[0] == str[0].toUpperCase();
}


console.log(isUpperCase("ABCD")); // returns true
console.log(isUpperCase("")); // returns false
console.log(isUpperCase("aBCD")); // returns false