# lily

# Project title
**Quiz Application**
* *Desc.*
* https://github.com/magsmagsmags/lily.git
* https://magsmagsmags.github.io/lily/


# Motivation
 Build a code quiz with multiple-choice questions.


# Requirements

* A timer-based quiz application that stores high scores client-side. 
* Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
As a coding bootcamp student
I want to take a timed quiz on an interesting topic that stores high scores
so that I can gauge my progress compared to my peers
```

*Guidelines:*

* Play proceeds as follows:

  * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

  * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

* Your application should also be responsive, ensuring that it adapts to multiple screen sizes.

* Refer to the animated GIF below for a demonstration of the application functionality.

![code quiz](./Assets/04-Web-APIs-homework-demo.gif)



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
### Hints

* Store your questions as an array of objects in a separate file, `questions.js`, that follows this format:

```js
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  ///etc.
];
```

* The length of the array in `questions.js` determines the length of play. Fifteen seconds per question is a good estimate, so 5 questions will result in a length of play of 75 seconds.


## Minimum Requirements

* Functional, deployed application.

* GitHub repository with README describing project.

* The first view of the application displays a button that starts the quiz.

* Clicking the start button displays a series of questions.

* Once the quiz begins, a timer starts.

* If a question is answered incorrectly, additional time is subtracted from the timer.

* The timer stops when all questions have been answered or the timer reaches 0.

* After the game ends, the user can save their initials and score to a highscores view using local storage.

## Bonus

* Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.

* Customize the application theme.

* Create multiple quizzes and an option for users to choose between them.

* Add the application to your portfolio.


## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!


## Submission on BCS

You are required to submit the following:

* The URL of the deployed application

* The URL of the GitHub repository