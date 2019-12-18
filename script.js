
(function () {
    var myQuestions = [
        {
            question: "How many staircases does Hogwarts have?",
            answers: {
                a: "142",
                b: "13",
                c: "394"
            },
            correctAnswer: "a"
        },
        {
            question: "Dumbledore has a scar above his left knee that is a perfect map of what?",
            answers: {
                a: "The Hogwarts Express route",
                b: "Hogsmeade",
                c: "The London Underground"
            },
            correctAnswer: "c"
        },
        {
            question: "The visitor’s entrance to the Ministry of Magic is an abandoned red telephone booth in London. What is the code you must dial to get in?",
            answers: {
                a: "1-3-1-3-1",
                b: "4-2-7-7-9",
                c: "6-2-4-4-2",
                d: "5-6-6-3-6-6"
            },
            correctAnswer: "c"
        }
    ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        var output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            var answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    //start countdown /////////////////////////

    //create timer
    var timer = 45;
    var timerCountdownEl = $("#timerCountdown");
    var timerReference = undefined;

    timerReference = window.setInterval(function () {
        timer--;
        if (timer == 0) {
            //When timer hits 0, move immediately to score screen.
            showResults();
            alert("Oh flobberworms! You ran out of time! Click 'Start Quiz Again' to get back on that broomstick and try again!");
        } else {
            timerCountdownEl.text(timer);
        };
    }, 1000);
    //////////////////////////////////////////////////////


    function showResults() {
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            var answerContainer = answerContainers[questionNumber];
            var selector = `input[name=question${questionNumber}]:checked`;
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "green";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
                timer -= 10;
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }


    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");

    // display quiz 
    buildQuiz();

    var previousButton = document.getElementById("previous");
    var nextButton = document.getElementById("next");
    var slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();