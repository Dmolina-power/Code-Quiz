var questionIndex = 0;
var questions = [
  {
    question: "Where are B/W Tegus origianlly from?",
    answers: ["Venezuela", "Argentina", "Florida", "Chile"],
    correctAnswer: "Argentina",
  },
  {
    question: "what should the Temp be in the hot side of enclosure?",
    answers: ["80 to 90 %", "90 to 100%", "95 to 105%", "110-120"],
    correctAnswer: "110-120",
  },
  {
    question: "What is a Tegu's lifespan?",
    answers: ["5 Years", "10 Years", "15 Years", "20 Years"],
    correctAnswer: "20 Years",
  },
  {
    question: "What are Tegu's average length?",
    answers: ["3 to 4 feet", "4 to 5 feet", "5 to 6 feet", "6+ feet"],
    correctAnswer: "4 to 5 feet",
  },
  {
    question: "Tegu's diet consits of?",
    answers: [
      "raw meat and fruits",
      "crickets and worms",
      "vegtables",
      "dog food",
    ],
    correctAnswer: "raw meat and fruits",
  },
];

// User will click on start button
var startNow = document.querySelector("#startQuiz");
startNow.addEventListener("click", startQuiz);
startNow.setAttribute("style", "margin-left: 580px");
var timeEl = document.querySelector(".time");
var byeBye = document.querySelector(".jumbotron");
var seeya = document.querySelector("#quizContainer");
// seeya.style.visibility = "hidden";
var timeLeft = 75;
var timerInterval;

function startQuiz() {
  startNow.style.visibility = "hidden";
  byeBye.style.visibility = "hidden";
  // seeya.style.visibility = "visible";
  timerInterval = setInterval(function () {
    timeEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timerInterval)
    }
  }, 1000);

  showQuestions()
}


  
function showQuestions() {
 
  var question = questions[questionIndex];
  var title = document.querySelector("#question");
  var $answers = document.querySelector("#answers");
  title.textContent = question.question;
  $answers.innerHTML = "";
  for (var i = 0; i < questions[questionIndex].answers.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = questions[questionIndex].answers[i];
    btn.setAttribute("class", "btn btn-primary btn-success ml-3");
    $answers.setAttribute("class", "text-center");
    $answers.append(btn);
    
  }
}

document.addEventListener("click", function (e) {
  var userAnswer = e.target.textContent;
  if (!e.target.matches("button")) return

  if (userAnswer === questions[questionIndex].correctAnswer) {
      
  } else {
     // Subtract 10 seconds off the clock
  }

  questionIndex++;
  if (questionIndex === questions.length) {
      endGame();

  } else {

      showQuestions();
  }
});



function endGame() {
  // Hide questions
  document.querySelector("#question-container").style.display = "none";
  // Show all done
  document.querySelector(".allDone").style.display = "block";
  // Make a form for initials
    // Save button to save to local storage
    document.querySelector(".submitMe").addEventListener("click", function(event){
      event.preventDefault();

      var initials = document.querySelector("#initials").value;
      document.querySelector("#initials").value = "";
      // Save to local storage
      //localStorage.setItem(initials, 20)
    })
  // Stop timer
  clearInterval(timerInterval);
}







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

// answer1.style.visibility = "hidden";
// answer2.style.visibility = "hidden";
// answer3.style.visibility = "hidden";
// answer4.style.visibility = "hidden";

// var repQuestions = document.querySelector(".question");
//    var answer1 = document.querySelector("#answer1");
//    var answer2 = document.querySelector("#answer2");
//    var answer3 = document.querySelector("#answer3");
//    var answer4 = document.querySelector("#answer4");
// //   // Display the question
//    repQuestions.textContent = "Question 1: Where are B/W Tegus originally from?";
// //   // Display answers
//    answer1.textContent = "venezuela";
//    answer2.textContent = "argentina";
//    answer3.textContent = "Florida";
//    answer4.textContent = "Chile";
// //   // Add event listeners to the buttons
//    answer1.addEventListener("click", evaluateAnswer);
//    answer2.addEventListener("click", evaluateAnswer);
//    answer3.addEventListener("click", evaluateAnswer);
//    answer4.addEventListener("click", evaluateAnswer);
