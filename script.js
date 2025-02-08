function checkAnswer() {
    const correctAnswer = "wave";  // Change this to your desired answer
    const userInput = document.getElementById("answerInput").value.trim().toLowerCase();

    if (userInput === correctAnswer) {
        window.location.href = "https://sendthesong.xyz/details/67a738181fc54584f656be0b";  // Change to your desired URL
    } else {
        alert("Incorrect answer. Try again.");
    }
}
