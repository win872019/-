function stars2(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += "*";
    console.log(str);
  }
for(let i = n-1;i>0;i--){    /**決定第(n+1)層開始，往下的總層數 */
    let str = "";            /**決定往下依序每一層的星數 */
    for(let j = 0;j<i; j++){
        str+="*"
    }
    console.log(str);
}
}

console.log(stars2(1));
console.log(stars2(2));
console.log(stars2(3));
console.log(stars2(4));
