function finishFunction(){
    alert("Thank you for completing the quiz")
}

function checkAnswers() {
    const name = document.getElementById('user').value
    //assign "0" to the "score" variable
    var score = 0;
    //assign the quiz elements to the quiz variable
    var quiz = document.forms.Quiz.elements;
    //assign the answer to the question to the answer1 variable


    var answer1 = quiz.yes_no.value;
    //check the answer to the first question

    if (answer1 == "yes") {
        //add 1 to the score if the user was correct
        score = score + 1;
    }

    var answer2 = quiz.percentage.value;
    //check the answer to the first question

    if (answer2 >=80) {
        //add 1 to the score if the user was correct
        score = score + 1;
    }

    var answer3 = quiz.totaldogs.value;
    //check the answer to the first question

    if (answer3 == 350) {
        //add 1 to the score if the user was correct
        score = score + 1;
    }

    alert("well done, " + name + " your score was .... " + score)
}