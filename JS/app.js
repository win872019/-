let answer = Math.floor(Math.random() * 100);
let n1 = 0;
let n2 = 99;

while (true) {
  let guess = prompt("make a guess:(between " + n1 + " and " + n2 + ")");
  if(guess < n1 || guess > n2){
    alert("Please make a valid input.")
    continue;
  }
  if (guess == answer) {
    alert("The answer is " + answer + ".");
    alert("You win the game.");
    break;
  } else if (guess < answer) {
    n1 = guess;
  } else {
    n2 = guess;
  }
}
