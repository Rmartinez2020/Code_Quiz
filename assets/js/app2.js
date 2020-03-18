//after the page loads
$(document).ready(function () {


    //Hook into elements
    //===============================================================
    //Buttons
    const startGameBtn = $("#start-game");
    const startOverBtn = $("#start-over");
    //Timer Span
    const timerSpan = $("#timer");
    //Quiz Div
    const mainDiv = $("#main-div");
    //===============================================================


    //Globals
    let counter = 0;
    let timeLeft = 15;
    let questionNum = 0;



    //questions array
    //===============================================================
    const questions = [
        {
            question: "What should the first line of your HTML be?",
            answers: [
                {
                    answer: "<!DOCTYPE html>",
                    c: true
                },
                {
                    answer: "<html>",
                    c: false
                },
                {
                    answer: "<head>",
                    c: false
                },
                {
                    answer: "<header>",
                    c: false
                }

            ]
        },
        {
            question: "How do you create an element using Jquery?",
            answers: [
                {
                    answer: "document.createElement('div')",
                    c: false
                },
                {
                    answer: "$('#div')",
                    c: false
                },
                {
                    answer: "$('<div>')",
                    c: true
                },
                {
                    answer: "$('div')",
                    c: false
                }

            ]
        },
        {
            question: "How do you hook into a class in CSS?",
            answers: [
                {
                    answer: "#class",
                    c: true
                },
                {
                    answer: ".class",
                    c: false
                },
                {
                    answer: "class{   }",
                    c: false
                },
                {
                    answer: "class()",
                    c: false
                }

            ]
        }
    ];
    //===============================================================

showHighScores();
    //Functions
    //===============================================================


    //start game
    function startGame() {
        //get rid of start game button and empty main div
        startGameBtn.remove();
        mainDiv.empty();
        //start timer
        myTimer();
        //start asking questions
        getNextQuestion();
        getNextAnswers();
    };


    //start over
    function startOver() {
        counter = 0;
        questionNum = 0;
        mainDiv.empty();
        getNextQuestion();
        getNextAnswers();
        myTimer();
    };


    //show High Scores
    function showHighScores() {
        for (let i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
            val = localStorage.getItem(key);
            console.log(val);
            let scoreDiv = $("<p>").addClass("text-center");
            scoreDiv.text(val);
            $("#modal-text").append(scoreDiv);
            
        }
    };


    //update timer on page
    function myTimer() {
        let interval = setInterval(updateTime, 1000);

        timerSpan.html("Time Remaining: " + (timeLeft - counter));

        function updateTime() {
            counter++;
            timerSpan.html("Time Remaining: " + (timeLeft - counter));
            if (counter === timeLeft || questionNum > (questions.length - 1)) {
                clearInterval(interval);
                let score = timeLeft - counter;
                mainDiv.empty();
                console.log(score);
                let userName = prompt("Enter Initials for Highscore!");
               let highScore = userName + ":" + score
               localStorage.setItem(userName, highScore );
                return;
            }
        }
    };


    //Prints next question onto the page
    function getNextQuestion() {
        //if there are no more questions end the function
        if (questionNum > (questions.length - 1)) {
            mainDiv.empty();
            return;
        } else {
            let questionDiv = $("<div>").addClass("row");
            questionDiv.text(questions[questionNum].question);
            mainDiv.append(questionDiv);
        }
    };


    //Print the answers onto the page
    function getNextAnswers() {
        //if there are no more questions end the function
        if (questionNum > (questions.length - 1)) {
            return;
        } else {
            for (let i = 0; i < questions[questionNum].answers.length; i++) {
                let answerDiv = $("<div>").addClass("row");
                let aBtn = $("<button>").addClass("btn answer-btn btn-success").attr("value", questions[questionNum].answers[i].c).text(questions[questionNum].answers[i].answer);
                $(aBtn).on("click", answerClicked);
                mainDiv.append(answerDiv);
                answerDiv.append(aBtn);
            }
        }
    };


    //when an answer is clicked
    function answerClicked() {
        if($("#answer-btn").val() === "true"){
            counter--;
            console.log(counter);
        }
        else{
            counter++;
            console.log(counter);
        }
        questionNum++;
        mainDiv.empty();
        getNextQuestion();
        getNextAnswers();
    };


    //===============================================================


    //Event Handlers
    //===============================================================
    startGameBtn.on("click", startGame);
    startOverBtn.on("click", startOver);
    //===============================================================


});