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
    //highscores
    const highscoresBtn = $("#highscores");
    //===============================================================


    //Globals
    let counter = 0;
    let timeLeft = 10;
    let questionNum = 0;



    //questions array
    //===============================================================
    const questions = [
        {
            question: "question 1",
            answers: [
                {
                    answer: "answer 1",
                    c: true
                },
                {
                    answer: "answer 2",
                    c: false
                },
                {
                    answer: "answer 3",
                    c: false
                },
                {
                    answer: "answer 4",
                    c: false
                }

            ]
        },
        {
            question: "question 2",
            answers: [
                {
                    answer: "answer 5",
                    c: true
                },
                {
                    answer: "answer 6",
                    c: false
                },
                {
                    answer: "answer 7",
                    c: false
                },
                {
                    answer: "answer 8",
                    c: false
                }

            ]
        },
        {
            question: "question 3",
            answers: [
                {
                    answer: "answer 9",
                    c: true
                },
                {
                    answer: "answer 1",
                    c: false
                },
                {
                    answer: "answer 2",
                    c: false
                },
                {
                    answer: "answer 4",
                    c: false
                }

            ]
        }
    ];
    //===============================================================


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
    };
    //show High Scores
    function showHighScores() {

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
                console.log(score);
                return score;
            }
        }
    };
    //Prints next question onto the page
    function getNextQuestion() {
        //if there are no more questions end the function
        if (questionNum > (questions.length - 1)) {
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
                let aBtn = $("<button>").addClass("btn answer-btn btn-success").text(questions[questionNum].answers[i].answer);
                $(aBtn).on("click", answerClicked);
                mainDiv.append(answerDiv);
                answerDiv.append(aBtn);
            }
        }
    };
    //when an answer is clicked
    function answerClicked() {
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