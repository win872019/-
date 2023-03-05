let ran = [20, 45, 11, 67, 403, 2, 107];

ran.forEach((x,a,b) => {
  if (x < 90) {
    console.log(x);
  }
  if (x==403){
    console.log(b);
  }
  console.log("Now is index " + a);

});

