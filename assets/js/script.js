
// Get references to the #start element
var startBtn = document.querySelector("#start");
var quizHeader = document.querySelector(".card-h2");

// Start the quiz on #start
function startQuiz() {
    var numOfQuestions = 5;
    timer = 75000;
    // Remove text from welcome screen
    p1.textContent = p2.textContent = "";
    startBtn.textContent = "";
    startBtn.setAttribute("style", "visibility:hidden");

    //for (q = 0; q < numOfQuestions; q++) {
    displayQuestions(0);
    //}

    function displayQuestions(question) {
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
        quizHeader.textContent = questions[question];
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
        var ans1 = quizBody.children[2];
        console.log(ans1);
        ans1.addEventListener("click", function (event) {
            ans1.setAttribute("style",buttonStyleOnClick);
            verifyAnswer(ans1.textContent);
         });
        var ans2 = quizBody.children[3];
        ans2.addEventListener("click", function (event) {
            ans2.setAttribute("style",buttonStyleOnClick);
             verifyAnswer(ans2.textContent);
        });
        var ans3 = quizBody.children[4];
        ans3.addEventListener("click", function (event) {
            ans3.setAttribute("style",buttonStyleOnClick);
            verifyAnswer(ans3.textContent);
        });
        var ans4 = quizBody.children[5];
        ans4.addEventListener("click", function (event) {
            ans4.setAttribute("style",buttonStyleOnClick);
            verifyAnswer(ans4.textContent);
        });
    }

    function verifyAnswer(userAnswer) {
        var correctAnswerIndex = ["3. alerts", "4. console log", "2. curly brackets", "4. all of the above", "3. quotes"];
        console.log("userAnswer = " + userAnswer);
        if (userAnswer != correctAnswerIndex[0]) {
            timer = timer - 10000;
            console.log("Wrong answer");
            var quizFooter = document.querySelector(".card-footer");
            var newhr = document.createElement("hr");
            newhr.setAttribute("width","100%");
            var newH2 = document.createElement("h2");
            newH2.textContent = "Wrong!";
            newH2.setAttribute("style","color:grey;text-align:left;font-size:20px");
            quizFooter.appendChild(newhr);
            quizFooter.append(newH2);
        }
    }
}

// Add event listener to 'Start Quiz' button
startBtn.addEventListener("click", startQuiz);
