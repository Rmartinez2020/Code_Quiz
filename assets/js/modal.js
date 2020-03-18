const modal = $("#highscoresModal");

// Get the button that opens the modal
const btn = document.getElementById("highscores");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.css("display", "block")
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.css("display", "none")
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.css("display", "none")

    }
}