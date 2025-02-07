function checkAnswer() {
    const correctAnswer = "wave";  // Change this to your desired answer
    const userInput = document.getElementById("answerInput").value.trim().toLowerCase();

    if (userInput === correctAnswer) {
        window.location.href = "https://sendthesong.xyz/";  // Change to your desired URL
    } else {
        alert("Incorrect answer. Try again.");
    }
}
