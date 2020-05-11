// Timer jumps from 0 to 75 seconds
// & Show the first question (call showQuestions)
// Then user clicks on answer
// Timer goes up or down based on whether or not right answer (if/else)
// Repeat 4 more times
// After last question, show all done page with score & stop timer
// User will enter initials, submit form & save to local storage
// Then show highscores
// Aside: if time reaches 0, show out of time message
// Defining ---|--- grabbing
var questions = [
  {
    question: "Where are B/W Tegus origianlly from?",
    answers:{
    a: "Venezuelan",
    b: "Argentina",
    c: "Florida",
    d: "Chile",
    },
    correctAnswer: "b"
  },
  {
    question: "what should the Temp be in the hot side of enclosure?",
    answer:{
    a: "80 to 90 %",
    b: "90 to 100%",
    c: "95 to 105%",
    d: "110-120",
    },
    CorrectAnswer: "d"
  },
  {
    question: "What is a Tegu's lifespan?",
    answer:{
    a: "5 Years",
    b: "10 Years",
    c: "15 Years",
    d: "20 Years",
    },
    correctAnswer: "d"
  },
  {
    question: "What are Tegu's average length?",
    answer:{
    a: "3 to 4 feet",
    b: "4 to 5 feet",
    c: "5 to 6 feet",
    d: "6+ feet",
    },
    correctAnswer: "b"
  },
  {
    question: "Tegu's diet consits of?",
    answer:{
    a: "raw meat and fruits",
    b: "crickets and worms",
    c: "vegtables",
    d: "dog food",
    },
    correctAnswer: "a",
  },
];
// User will click on start button
var startNow = document.querySelector("#startQuiz");
startNow.addEventListener("click", startQuiz);
startNow.setAttribute("style", "margin-left: 580px");

var timeEl = document.querySelector(".time");
var byeBye = document.querySelector(".jumbotron");
var questionEl = document.querySelector(".question");
answer1.style.visibility = "hidden";
answer2.style.visibility = "hidden";
answer3.style.visibility = "hidden";
answer4.style.visibility = "hidden";

function startQuiz() {
  startNow.style.visibility = "hidden";
  byeBye.style.visibility = "hidden";
  answer1.style.visibility = "visible";
  answer2.style.visibility = "visible";
  answer3.style.visibility = "visible";
  answer4.style.visibility = "visible";
  answer1.setAttribute("style", "margin-left: 500px");

  var timeLeft = 75;
  var timeInterval = setInterval(function () {
    timeEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;
    
  }, 1000);
  showQuestions();
}

function showQuestions() {
  var question = document.querySelector(".question");
  var answer1 = document.querySelector("#answer1");
  var answer2 = document.querySelector("#answer2");
  var answer3 = document.querySelector("#answer3");
  var answer4 = document.querySelector("#answer4");
  //   // Display the question
  question.textContent = "Question 1: Where are B/W Tegus originally from?";
  //   // Display answers
  answer1.textContent = "venezuela";
  answer2.textContent = "argentina";
  answer3.textContent = "Florida";
  answer4.textContent = "Chile";
  //   // Add event listeners to the buttons
  answer1.addEventListener("click", evaluateAnswer);
  answer2.addEventListener("click", evaluateAnswer);
  answer3.addEventListener("click", evaluateAnswer);
  answer4.addEventListener("click", evaluateAnswer);
}

function evaluateAnswer() {
    if (event.target = ("argentina")); 
    showQuestions();
 // If they are right, ntohign happens
  // If they are wrong, lose 10 seconds
  // if event.target.id does not match("argentina"), then minus 10 seconds, and tell them wrong!
  // showquestion 2
  
}

// function countdown() {
//   var timeLeft = 90;
//   var timeInterval = setInterval(function () {
//     timerEl.textContent = timeLeft + " seconds remaining";
//     timeLeft--;
//     if (timeLeft === 0) {
//       timerEl.textContent = "";
//       speedRead();
//       clearInterval(timeInterval);
//     }
//   }, 1000);
// }

//   var q1 = document.querySelector(".q1");
//   var example = document.querySelector("#a1");
//   document.getElementById("a1");
//   q1.textContent = "Question#2";
//   a1.textContent = "phoebe";
//   var questions = [
//     {
//       question1: "who let the dogs out?",
//       answers: {
//         a: "a",
//         b: "b",
//         c: "c",
//         d: "d",
//       },
//       correctAnswer: "c",
//     },
//     {
//       question2: "q2",
//       answers: {
//         a: "a",
//         b: "b",
//         c: "c",
//         d: "d",
//       },
//       correctAnswer: "d",
//     },
//     {
//       question3: "q3",
//       answers: {
//         a: "a",
//         b: "b",
//         c: "c",
//         d: "d",
//       },
//       correctAnswer: "b",
//     },
//   ];
//   function showQuestions(questions, quizContainer) {
//     var output = [];
//     var answers;
//     for (var i = 0; i < questions.length; i++) {
//       answers = [];
//       for (letter in questions[i].answers) {
//         answers.push(
//           "<label>" +
//             '<input type="radio" name="question' +
//             i +
//             '" value="' +
//             letter +
//             '">' +
//             letter +
//             ": " +
//             questions[i].answers[letter] +
//             "</label>"
//         );
//       }
//       output.push(
//         '<div class="question">' +
//           questions[i].question +
//           "</div>" +
//           '<div class="answers">' +
//           answers.join("") +
//           "</div>"
//       );
//     }
//   }
//   showQuestions(questions);
// function clickExample(event) {
//     console.log(event);
//     console.log(event.target.id);
// }
// potato.addEventListener("click", clickExample);
// Collapse
// var question = document.querySelector(".question");
//   var answer1 = document.querySelector("#answer1");
//   var answer2 = document.querySelector("#answer2");
//   var answer3 = document.querySelector("#answer3");
//   var answer4 = document.querySelector("#answer4");
//   // Display the question
//   question.textContent = "Question 1: Where are B/W Tegus originally from?";
//   // Display answers
//   answer1.textContent = "venezuela";
//   answer2.textContent = "argentina";
//   answer3.textContent = "Florida";
//   answer4.textContent = "Chile";
//   // Add event listeners to the buttons
//   answer1.addEventListener("click", evaluateAnswer);
//   answer2.addEventListener("click", evaluateAnswer);
//   answer3.addEventListener("click", evaluateAnswer);
//   answer4.addEventListener("click", evaluateAnswer);
