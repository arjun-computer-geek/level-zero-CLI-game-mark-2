const readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

const questions = [
  {
    question: "How many founders does Facebook have?",
    options:["one", "two", "four"],
    answer: "four"
  },
  {
    question: "Where did Mark Zuckerberg start Facebook?",
    options:["Harvard University", "Stanford University", "Yale University"],
    answer: "Harvard University"
  },
  {
    question: "Zuckerberg likes to set annual challenges for himself. Which one has he not tried?",
    options:["Wear a tie to work everyday", "Becoming an opera singer", "Learning chinese"],
    answer: "Becoming an opera singer"
  },
  {
    question: "How did Zuckerberg end his speeches at company all-hands in the early days? ",
    options:["Domination!", "Exelisor!", "Connect!"],
    answer: "Domination!"
  },
  {
    question: "In 2005, Zuckerberg offered future wife Priscilla Chan a job at Facebook. What did she offer him?",
    options:["A Hug", "A Lamborghini", "A Twizzler"],
    answer: "A Twizzler"
  },
  {
    question: "What is Zuckerberg's Twitter handle?",
    options:["@zuck", "@finkd", "@realmarkzee"],
    answer: "@finkd"
  },
  {
    question: "Zuckerberg has three sisters. Which one worked at Facebook with him?",
    options:["Arielle", "Randi", "Donna"],
    answer: "Randi"
  },
  {
    question: "What does Zuckerberg's dad do for a living?",
    options:["Dentist", "Psychologist", "Insurance Salesman"],
    answer: "Dentist"
  },
  {
    question: "Which actor played Zuckerberg in a movie?",
    options:["Jesse Eisenberg", "Andy Samberg", "Michael Cera"],
    answer: "Jesse Eisenberg"
  },
  {
    question: "Why is Facebook blue?",
    options:["Myspace used the color red", "Zuckerberg is color-blind", "His sister, Randi, told him to"],
    answer: "Zuckerberg is color-blind"
  }
]
var score = 0;
log('Welcome To Game \n\n How Do You Know ' + chalk.blue('Mark Zuckerberg'));

const game = (question, options, answer) => {
  log(chalk.green(question));
  let userAns = readlineSync.keyInSelect(options,'',{cancel: false});

  if(options[userAns].toLowerCase() === answer.toLowerCase()){
    score = score + 1;
    log('Your Answer is ' + chalk.green('correct')+'\nYour Score: ' + chalk.green(score));
  }
  else{
    log('Your Answer is ' + chalk.red('incorrect ')+'\nYour Score: ' + chalk.green(score));
  }
}

for(let i = 0; i < questions.length; i++){
  game(questions[i].question, questions[i].options, questions[i].answer)
  log(chalk.grey('\n*************************'));
}

log("Your Final Score : " + chalk.yellow(score));