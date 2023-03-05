function isUpperCase(str) {
  if (str.length == 0) {
    return false;
  }
  let allUpperCase = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase()) {
      allUpperCase = false;
     
    }
    
  }
  return allUpperCase;
}

