function checkAnswer() {
    const correctAnswer = "the 1975";  // Change this to your desired answer
    const userInput = document.getElementById("answerInput").value.trim().toLowerCase();

    if (userInput === correctAnswer) {
        window.location.href = "https://sendthesong.xyz/details/67a5d1cd1fc54584f6567ab6";  // Change to your desired URL
    } else {
        alert("Incorrect answer. Try again.");
    }
}
