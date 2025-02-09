function checkAnswer() {
    const correctAnswer = "321";  // Change this to your desired answer
    const userInput = document.getElementById("answerInput").value.trim().toLowerCase();

    if (userInput === correctAnswer) {
        window.location.href = "https://sendthesong.xyz/details/67a88b5d1fc54584f6570482";  // Change to your desired URL
    } else {
        alert("Incorrect answer. Try again.");
    }
}
