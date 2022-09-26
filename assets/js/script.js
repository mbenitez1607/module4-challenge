
// Get reference to the #start element (Start Quiz button)
var startBtn = document.querySelector("#start");
// Get reference to the h2 element where the title / questions are posted
var quizHeader = document.querySelector(".card-h2");
// Create timer
var timerEl = document.getElementsByClassName("countdown")[0];
// Countdown: starts at 75 seconds
var timeLeft;
// Number of penalty seconds for a wrong answer 
var decrement = 10;
// Quiz has not started or is ongoing
var done = 0; 
var score = 0;
// Keep track of whether there's been any wrong answers
var wrongAnswer = 0; // Correct answer

function countdown(quizDone) {
    timeLeft = 75; // Quiz will last 75 seconds
    timerEl.textContent = "Time: " + timeLeft--;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            if (done === 0) { // If quiz is ongoing update timer
                timerEl.textContent = "Time: " + timeLeft;
                timeLeft--;
            }
            else { // Quiz has finished
                timerEl.textContent = "Time: " + timeLeft;
                // Stops execution of action at set interval
                clearInterval(timeInterval);
            }
        } else if (timeLeft === 0) { // User ran out of time to complete the quiz
            timerEl.textContent = "Time: " + timeLeft;
            // Stops execution of action at set interval
            clearInterval(timeInterval);
            finalScreen(wrongAnswer); // Assuming there's a wrong answer!!!
        }
    }, 1000);
}

// Helper function to update the question
function setQuizHeader(newText) {
    quizHeader.textContent = newText;
}

// Display user's scores either when completing the quiz or time is up
function finalScreen (answer) {
    // There are no more questions or time ran out, print final results
    setQuizHeader("All Done!");
    resetContent(answer);
    var newH2 = document.createElement("h2");
    newH2.textContent = "Your final score is " + score;
    var quizBody = document.querySelector(".card-body");
    quizBody.appendChild(newH2);

}

// Start the quiz on #start
function startQuiz() {
    var numOfQuestions = 5;
    var nextQuestion = 0;
    // Remove text from welcome screen
    resetContent(nextQuestion);
    startBtn.textContent = "";
    startBtn.setAttribute("style", "visibility:hidden");

    // Start the quiz timer
    countdown(done);
    // Update welcome screen with first question
    displayQuestion(nextQuestion);


    // Function to display the questions
    function displayQuestion(question) {
        // Update numOfQuestions in startQuiz after adding more question/answer pairs below
        var questions = ["Commonly used data types DO NOT include:",
            "A very useful tool used during development and debugging for printing content to the debugger is:",
            "The condition in an if / else statement is enclosed with _____.",
            "Arrays in JavaScript can be used to store _____.",
            "String values must be enclosed within _____ when being assigned to variables."];
        var answers = [["strings", "booleans", "alerts", "numbers"],
        ["JavaScript", "terminal/bash", "for loops", "console log"],
        ["quotes", "curly brackets", "parenthesis", "square brackets"],
        ["numbers and strings", "other arrays", "booleans", "all of the above"],
        ["commas", "curly brackets", "quotes", "parenthesis"]
        ];
        // Display next question
        setQuizHeader(questions[question]);
        // Display next answer
        displayAnswers(answers[question]);
    }

    function displayAnswers(ans) {
        var body = document.body;
        // Declare the style for the answer's buttons
        var buttonStyle = "background-color:#351c75;color:white;text-align:left;padding-bottom:10px;border-radius:10px;display:block;font-size: 22px;line-height: 22px;margin: 16px 16px 16px 20px;padding: 14px 34px;width:250px;"
        var buttonStyleOnClick = "background-color:#bb5be6;color:white;text-align:left;padding-bottom:10px;border-radius:10px;display:block;font-size: 22px;line-height: 22px;margin: 16px 16px 16px 20px;padding: 14px 34px;width:250px;"

        // Select <div> element with class card-body
        var quizBody = document.getElementsByClassName("card-body")[0];
        for (i = 0; i < ans.length; i++) {
            // Create new button to display a possible answer
            var newbtn = document.createElement("button");
            // Add answer content to the button
            newbtn.textContent = i + 1 + '. ' + ans[i];
            newbtn.setAttribute("style", buttonStyle);
            newbtn.className = "btn";
            quizBody.appendChild(newbtn);
        }

        // Create event listeners for each answer button
        var ans1 = quizBody.children[0];
        ans1.addEventListener("click", function (event) {
            ans1.setAttribute("style", buttonStyleOnClick);
            verifyAnswer(ans1.textContent);
        });
        var ans2 = quizBody.children[1];
        ans2.addEventListener("click", function (event) {
            ans2.setAttribute("style", buttonStyleOnClick);
            verifyAnswer(ans2.textContent);
        });
        var ans3 = quizBody.children[2];
        ans3.addEventListener("click", function (event) {
            ans3.setAttribute("style", buttonStyleOnClick);
            verifyAnswer(ans3.textContent);
        });
        var ans4 = quizBody.children[3];
        ans4.addEventListener("click", function (event) {
            ans4.setAttribute("style", buttonStyleOnClick);
            verifyAnswer(ans4.textContent);
        });
    }

    function verifyAnswer(userAnswer) {
        var correctAnswerIndex = ["3. alerts", "4. console log", "2. curly brackets", "4. all of the above", "3. quotes"];
        console.log("userAnswer = " + userAnswer);
        console.log("correctAnswer = " + correctAnswerIndex[nextQuestion])
        if (userAnswer != correctAnswerIndex[nextQuestion++]) {
            wrongAnswer = 1; // Wrong answer
            if (timeLeft > 10) {
                timeLeft = timeLeft - decrement;
            }
            else {
                finalScreen(wrongAnswer);
                done = 1; // Quiz is finished
            }
            console.log("Wrong answer");
            var quizFooter = document.querySelector(".card-footer");
            var newhr = document.createElement("hr");
            newhr.setAttribute("width", "100%");
            var newH2 = document.createElement("h2");
            newH2.textContent = "Wrong!";
            newH2.setAttribute("style", "color:grey;text-align:left;font-size:20px");
            quizFooter.appendChild(newhr);
            quizFooter.append(newH2);
        } else {
            score++;
        }
        if (nextQuestion >= numOfQuestions) { // Reached the end of the quiz
            finalScreen(wrongAnswer);
            done = 1; // Quiz is finished
        } else { // Reset screen and display next question
        resetContent(wrongAnswer);
        displayQuestion(nextQuestion);
        }
    }
} // end of StartQuiz

function resetContent(answer) {
    var quizBody = document.getElementsByClassName("card-body")[0];
    while (quizBody.firstChild) {
        quizBody.removeChild(quizBody.firstChild);
    }
    if (answer) {
        var quizFooter = document.querySelector(".card-footer");
        while (quizFooter.firstChild) {
            quizFooter.removeChild(quizFooter.firstChild);
        }
    }
}

    // Add event listener to 'Start Quiz' button
    startBtn.addEventListener("click", startQuiz);
