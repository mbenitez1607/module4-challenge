
// Get references to the #start element
var startBtn = document.querySelector("#start");
var quizHeader = document.querySelector(".card-header");

// Start the quiz on #start
function startQuiz() {
    var numOfQuestions = 5;
    // Remove text from welcome screen
    p1.textContent = p2.textContent = "";

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
        //
        var buttonStyle = "background-color:#351c75;color:white;text-align:left;padding-bottom:10px;border-radius:10px;display:block;font-size: 22px;line-height: 22px;margin: 16px 16px 16px 20px;padding: 14px 34px;width:250px;"
            
        // Select <div> element with class card-body
        var quizBody = document.getElementsByClassName("card-body")[0];
        for (i = 0; i < ans.length; i++) {
            // Create new button to display a possible answer
            var newbtn = document.createElement("button");
            // Add answer content to the button
            newbtn.textContent = i+1 + '. ' + ans[i];
            newbtn.setAttribute("style", buttonStyle);
            quizBody.appendChild(newbtn);
         }
    }
}

// Add event listener to 'Start Quiz' button
startBtn.addEventListener("click", startQuiz);
