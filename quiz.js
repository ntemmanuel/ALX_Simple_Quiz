// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Identify the correct answer
    let correctAnswer = "4";

    // Step 3: Retrieve the user's answer
    let selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedOption ? selectedOption.value : null;

    // Step 4: Compare the user's answer with the correct answer
    let feedbackElement = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add an event listener to the submit button
let submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);