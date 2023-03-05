function makeStars(n){
    let str = "*"
    for(let i =1; i<n;i++){
        str = str + "\n";
        for(let j=0; j<=i; j++){
            str=str+"*";
        }

    }
    return str;
}

console.log(makeStars(1));
// *
console.log(makeStars(2));
// *\n**
console.log(makeStars(5));
// *\n**\n***\n****\n*****