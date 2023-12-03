// install readline package for taking input from the users
import readlineSync from 'readline-sync';
// install chalk package to have colur full CLI
import chalk from 'chalk';

// var readlineSync = require("readline-sync")

// ask the user name and welcome them
var userName = readlineSync.question("What's your name? ");
console.log(chalk.blue("Welcome "+chalk.red.bold(userName)+"!. Lets see how much you know about Friends web-series! "));

// declare a variable to store the score
var score = 0;

// highscore database
var highScore = ["Jay : 5", "Sanchita : 5", "Archana : 5", "Juhi : 5", "Deepen : 4", "Monali : 3"]


// create a function to play the quiz
function play(question, answer){
  var userAnswer = readlineSync.question(chalk.yellowBright(question))

  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green.bold("Right!"))
    score = score + 1
  }
  else {
    console.log(chalk.red("Wrong!"))
  } 
  console.log("Your current score is: ", score)
  console.log(chalk.black.bold("-----------------------"))
}


// declare a variable to store the questions
var questionList = [
  {
    question: "Who often said, 'How you doin'?' (first name only) ",
    answer: "Joey"
  },
  {
    question: "Whose character was the most sarcastic? (first name only) ",
    answer: "Chandler"
  },
  {
    question: "What is the last name of Ross and Monica? ",
    answer: "Geller"
  },
  {
    question: "Which character famously shouted, 'Pivot!' during a moving day? (first name only) ",
    answer: "Ross"
  },
  {
    question: "Who sang most famous song - Smelly Cat? (first name only) ",
    answer: "Phoebe"
  }
]

// Create a for loop to repeat the questions
for(var i=0; i < questionList.length; i++) {
  var questions = questionList[i];
  play(questions.question, questions.answer)
}

// Show final score
console.log("Hey " + chalk.red.bold(userName) + "! Your Final score is: " + chalk.green.bold(score))

console.log(chalk.blue("Check out the high scores, if your name should be there on the list then send me " + chalk.redBright("screenshot") + " & I'll update it."))

for (i=0; i < highScore.length; i++) {
  console.log(chalk.magentaBright(highScore[i]));
}
