function position(str) {
    if (str.length == 0){
        return -1;
    }
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      return str[i] + " " + i;
      
    }
  }
  return -1;
}

console.log(position("Afghghj"))
