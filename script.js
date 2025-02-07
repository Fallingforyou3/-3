function checkAnswer() {
    const correctAnswer = "mikey";  // Change this to your desired answer
    const userInput = document.getElementById("answerInput").value.trim().toLowerCase();

    if (userInput === correctAnswer) {
        window.location.href = "pornhub.com";  // Change to your desired URL
    } else {
        alert("Incorrect answer. Try again.");
    }
}
