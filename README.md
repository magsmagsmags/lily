
# Project title
**Quiz Application**
* A timer-based quiz application that stores high scores client-side. 
* https://github.com/magsmagsmags/lily.git
* https://magsmagsmags.github.io/lily/


# Motivation
 Build a code quiz with multiple-choice questions.


# Requirements

* Play proceeds as follows:

  * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

  * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

* Your application should also be responsive, ensuring that it adapts to multiple screen sizes.

* Refer to the animated GIF below for a demonstration of the application functionality.


# Code style
* HTML
* CSS
* js-standard-style

# Screenshots
* ![Screenshot](/images/Screenshot1.png)
* ![Screenshot](/images/Screenshot2.png)

# Installation
Visit the web app at: https://magsmagsmags.github.io/lily/

# How to use?
1. Load the web app at https://magsmagsmags.github.io/lily/
1. Click the button labeled "Click to Begin Quiz" to start the quiz
1. Select you answer for the first question, and click the button labeled "Next Question"
    1. Follow the same procedure for Question two
    1. After you have selected an answer for Question 3, click the button labeled "Submit"
1. You may restart the quiz at any time by clicking the button labeled "Start Quiz Again!"
    1. If you click this button before submitting your quiz, your progress on the current quiz will be lost
1. View your score in the gold "Results" section after you have submittd your quiz

# Contribute
Please reach out to me via Slack (Mags Kiefer) or at sheakiefer@gmail.com for code suggestions, critiques, feedback, or offers to collaborate. 

# Credits

* Brittany Taylor
* Israel Medina
* Eric Scott

--------------------------------


## Minimum Requirements

* Functional, deployed application.

* GitHub repository with README describing project.

* The first view of the application displays a button that starts the quiz.

* Clicking the start button displays a series of questions.

* Once the quiz begins, a timer starts.

* If a question is answered incorrectly, additional time is subtracted from the timer.

* The timer stops when all questions have been answered or the timer reaches 0.

* After the game ends, the user can save their initials and score to a highscores view using local storage.

