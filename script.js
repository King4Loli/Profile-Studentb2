const button = document.getElementById("message");
const message = document.getElementById("message2");

button.addEventListener("click", function() {
    if (message.textContent === "") {
        message.textContent = "If you click this. Meaning my script work on script.js lol.";
        button.textContent = "Hide message";
    } else {
        message.textContent = "";
        button.textContent = "My message!";
    }
});