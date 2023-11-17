const { runQuiz, randomizeQuestions } = require("./quiz.js");
const quizQuestions = require("./data.js");

const random = randomizeQuestions(quizQuestions)
runQuiz(random); 