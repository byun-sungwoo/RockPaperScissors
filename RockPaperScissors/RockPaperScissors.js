// Caching Dom
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const reset_div = document.getElementById("reset");

function getCompChoice()
{
  const choices = ['r', 'p', 's'];

  return choices[Math.floor(Math.random()*3)]
}

function win(user, comp)
{
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `${abbrToWord(user)} beats ${abbrToWord(comp)}. You Win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(user, comp)
{
  const userChoice_div = document.getElementById(user);
  compScore++;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${abbrToWord(user)} loses to ${abbrToWord(comp)}. You lose.`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function tie(user, comp)
{
  const userChoice_div = document.getElementById(user);
  result_div.innerHTML = `${abbrToWord(user)} matches ${abbrToWord(comp)}. Tie.`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}

function game(user)
{
  const comp = getCompChoice();
  const choice = user+comp;
  if(choice === "rs" || choice === "pr" || choice === "sp")
    win(user, comp);
  else if(choice === "sr" || choice === "rp" || choice === "ps")
    lose(user, comp);
  else
    tie(user, comp);
}

function resetGame()
{
  result_div.innerHTML = "Make your move.";
  userScore = 0;
  compScore = 0;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
}

function abbrToWord(letter)
{
  if(letter === "r")
    return "Rock";
  else if(letter === "p")
    return "Paper";
  return "Scissor";
}

function main()
{
  rock_div.addEventListener('click', function() {
    game("r");
  });

  paper_div.addEventListener('click', function() {
    game("p");
  });

  scissor_div.addEventListener('click', function() {
    game("s");
  });

  reset_div.addEventListener('click', function() { resetGame(); } );
}

main();
