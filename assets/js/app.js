//After Page Loads
$(document).ready(function () {
    //Hook into elements
    //===============================================================
    //Buttons
    var startGameBtn = $("#start-game");
    var startOverBtn = $("#start-over");
    //Timer Span
    var timerSpan = $("#timer");
    //Quiz Div
    var mainDiv = $("#main-div");
    //===============================================================

    //Game object
    //===============================================================
    var game = {
        //Game variables
        questionIndex: 0,
        timer: 61,
        //Questions for the quiz
        questions: {
            questionOne: {
                q: "question 1",
                a: ["Answer 1", "Answer 1", "Answer 1", "Answer 1"],
                c: 1
            },
            questionTwo: {
                q: "question 2",
                a: ["Answer 1", "Answer 1", "Answer 1", "Answer 1"],
                c: 4
            },
            questionThree: {
                q: "question 3",
                a: ["Answer 1", "Answer 1", "Answer 1", "Answer 1"],
                c: 3
            },

        },
        //Game Fucntions/Event Listeners
        //===============================================================
        //start game function when start game is clicked
        startGame: startGameBtn.on("click", function () {
            //get rid of start game button and empty main div
            startGameBtn.remove();
            mainDiv.empty();
            //create timer
            setInterval(function () {
                game.timer--;
                timerSpan.text("Time Remaining: " + game.timer);
            }, 1000);
            //create questions and answers in the main div
            createQuestions();
        }),
        //start over function when start over is clicked
        startOver: startOverBtn.on("click", function () {
            game.timer = 61;
            game.questionIndex = 0;

        }),
        createQuestions: function () {
            var makeQuestion = $("<div>");
            makeQuestion.addClass("row");
            makeQuestion.text(game.questions[this.questionIndex].q);

        }
    }



});