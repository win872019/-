function stars(n) {
  for (let i = 1; i <= n; i++) {
    let st = "";
    for (let j = 0; j < i; j++) {
      st += "*";
    }
    console.log(st);
  }
}

stars(5);

stars(9);

/*my solution*/

// function stars(n) {
//   let str="";
//   for (let i = 1; i <= n; i++) {
//     str+="*";
//     console.log(str);
//   }

// }

// stars(15);
