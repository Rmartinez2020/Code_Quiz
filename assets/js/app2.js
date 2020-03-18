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
    let timer = 61;
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
                    answer: "answer 8",
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
            question: "question 3",
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
        setInterval(myTimer, 1000);
        getNextQuestion();
        getNextAnswers();
    };
    //start over
    function startOver() {

    };
    function showHighScores() {

    };
    //update timer on page
    function myTimer() {
        timer--;
        timerSpan.text("Time Remaining: " + timer);
    };
    function getNextQuestion() {
        let questionDiv = $("<div>").addClass("row").text(questions[questionNum].question);
        mainDiv.append(questionDiv);
        for (let i = 0; i < questions[questionNum].answers.length; i++) {
            let answerDiv = $("<div>").addClass("row");
            let aBtn = $("<button>").addClass("btn answer-btn btn-success").text(questions[questionNum].answers[i].answer);
            $(aBtn).on("click", answerClicked);
            mainDiv.append(answerDiv);
            answerDiv.append(aBtn);

        }
    };
    function getNextAnswers() {
    };
    function answerClicked() {
        // mainDiv.empty();
        questionNum++;
        getNextQuestion;
        getNextAnswers;
        console.log("answer was clicked" + questionNum);
    };


    //===============================================================


    //Event Handlers
    //===============================================================
    startGameBtn.on("click", startGame);
    startOverBtn.on("click", startOver);
    // answerBtn.on("click", answerClicked);
    // $(document).on("click", "#answer-btn", answerClicked);


    //===============================================================
});