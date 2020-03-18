//Target Modal that will show
const modal = $("#highscoresModal");

// Target button to open modal
const highscoresBtn = $("#highscores");

// close button for modal
const span = $(".close");

// open modal when highscores is clicked
highscoresBtn.on("click", function () {
    modal.css("display", "block")
})

// close button for modal
span.on("click",  function () {
    modal.css("display", "none")
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.css("display", "none")
        
    }
}