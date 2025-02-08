function checkAnswer() {
    const correctAnswer = "wave";  // Change this to your desired answer
    const userInput = document.getElementById("answerInput").value.trim().toLowerCase();

    if (userInput === correctAnswer) {
        window.location.href = "https://sendthesong.xyz/details/67a77c391fc54584f656d3c3";  // Change to your desired URL
    } else {
        alert("Incorrect answer. Try again.");
    }
}
