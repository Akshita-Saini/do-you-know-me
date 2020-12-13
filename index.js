//console.log("Akshita");

//importing readline-sync (package) to be used 
const readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.bgCyan.bold.white("How well do you know me?"));
console.log(chalk.bgCyan.bold.white("A CLI - app by Akshita Saini"));
console.log("");

var userName = readlineSync.question("What's your name?\n");
console.log("");
console.log("Welcome " + chalk.bgCyan.bold.white(userName) + "!");

// var questionOne = "Is my age greater than 25? \n";
// var answerOne = "No";

console.log("");

var yourScore = 0;

function play(question, answer)
{
  var userAnswer = readlineSync.question(chalk.bold.blackBright.bgWhite(question)); 
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.greenBright("Yayy, you're awesome!"));
    yourScore++;
  }
  else 
  {
    console.log(chalk.redBright("Sorry, too bad you don't know. :/"));
  }
  console.log("");
}

var questions = [
  {
    question:"Do I prefer to read novels or to watch movies? ",
    answer:"read"
  },
  {
    question:"Do I like pineapples on my pizza? ",
    answer:"yes"
  },
  {
    question:"Am I older than 20? ",
    answer:"yes"
  },
  {
    question:"What's my favourite fruit? ",
    answer:"tomato"
  },
  {
    question:"Do I get dank memes? ",
    answer:"yes"
  }
]

for(var i=0;i<questions.length;i++)
{
   play(questions[i].question, questions[i].answer);
}


console.log(chalk.bgCyan.white.bold("You scored: " + yourScore));

var scores = [
  {
    user:"Akshita",
    score:5
  },
  {
    user:"Papa",
    score:0
  }
]

//Add to the scores array 
/*scores[scores.length] = {
  user:userName,
  score:yourScore
}*/

var count=scores.length;
for(var i=0;i<scores.length;i++)
{
  if(yourScore>=scores[i].score){
    count--;
  }
}

console.log("");
if(count===0)
{
    console.log(chalk.bold.yellowBright("You did it!"));
    console.log(chalk.bold.yellowBright("You beat the high score!"));
}



