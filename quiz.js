const readlineSync = require("readline-sync");

// Function to ask a quiz question and returns a new user score that is incremented for correct answer
function askQuestion(questionObj, userScore) {
  // display question to user
  console.log(questionObj.question)
  // present user with all choices
  for (const choice of questionObj.choices) {
    console.log('- ' + choice)
  }
  // get user's input of choice
  const userInput = readlineSync.question('Input answer: ')
  // use the check answer function to determine if input was correct
  const isCorrect = checkAnswer(userInput, questionObj.correctAnswer)
  // update user score
  if (isCorrect) {
    userScore++
  }
  // return new user score
  return userScore
}

// Function to check the user's answer. Allow answer to ignore casing of correct answer. return a boolean
function checkAnswer(userAnswer, correctAnswer) {
  // change strings to lowercase
  // is the userAnswer the same as correctAnswer?
  //if they are the same return true, else return false
  return userAnswer.toLowerCase() === correctAnswer.toLowerCase()

}

// Function to run the quiz
function runQuiz(quizQuestions) {
  let userScore = 0;

  // Iterate through the questions
  for (const question of quizQuestions) {
// for each question, run ask question function
// take result of ask question and update score
userScore = askQuestion(question, userScore)

  }

  // Display final score
  console.log(
    "Quiz complete! Your score: " +
    userScore +
    " out of " +
    quizQuestions.length,
  );
}

//function that takes the quiz questions as an input. Returns 5 random questions from that.

const randomizeQuestions = (quizQuestions) => {
  //create empty array for randomized
  const randomized = []
  // iterate 5 times
    for(let counter = 0; counter < 5; counter++) {
      //get random number
      const randomNumber = Math.floor(Math.random() * quizQuestions.length)
      // use random number to get quiz question from quizQuestions.
      const question = quizQuestions.splice(randomNumber, 1)[0]
      // add question to randomQuestions
      randomized.push(question)
    }
    return randomized
      //return 5 random questions
    }

module.exports = { askQuestion, checkAnswer, runQuiz, randomizeQuestions };
