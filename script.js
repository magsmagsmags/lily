
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
            question: "What is the code you must dial to get into he visitor’s entrance to the Ministry of Magic?",
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
        //  store the output (HTML)
        var output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            // store answer choices
            var answers = [];

            for (letter in currentQuestion.answers) {
                // + radio button
                answers.push(
                    `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
                );
            }

            // + to output
            output.push(
                `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
            );
        });

        // put it on the page
        quizContainer.innerHTML = output.join("");
    }

    //countdown /////////////////////////

    //create timer
    var timer = 45;
    var timerCountdownEl = $("#timerCountdown");
    var timerReference = undefined;

    timerReference = window.setInterval(function () {
        timer--;
        if (timer == 0) {
            showResults();
            alert("Oh flobberworms! You ran out of time! Click 'Start Quiz Again' to get back on that broomstick and try again!");
            quizContainer.style.display = "none";
        } else {
            timerCountdownEl.text(timer);
        };
    }, 1000);



    function showResults() {
        // quiz answer containers
        var answerContainers = quizContainer.querySelectorAll(".answers");

        // user's answers
        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            var answerContainer = answerContainers[questionNumber];
            var selector = `input[name=question${questionNumber}]:checked`;
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

                answerContainers[questionNumber].style.color = "green";
            } else {

                answerContainers[questionNumber].style.color = "red";
                timer -= 10;
            }
        });

        // correct/total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    // if (initials !== "") {
    //     var submitBtn = document.getElementById("userInitials");

    //     var currentScore = {
    //        score: time,
    //         initials: initials
    //  };

    //    resultsContainer.push(curentScore);
    //    window.localStorage.setItem("results", JSON.stringify(resultsContainer));
    //    console.log(currentScore)
    //   }
    // }


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