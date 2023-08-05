const quizContainer =document.getElementById('quiz')
const submitButton=document.getElementById('submit')
const  resultsContainer =document.getElementById('result')
const myQuestions = [
{
    question: "1. What is the capital of France?",
    answers: {
    a: "Paris",
    b: "London",
    c: "New York"
    },
    correctAnswer: "a"
},
{
    question: "2. What is the largest country in the world?",
    answers: {
    a: "Russia",
    b: "China",
    c: "United States"
    },
    correctAnswer: "a"
},
{
    question: "3. What is the currency of Japan?",
    answers: {
    a: "Yuan",
    b: "Euro",
    c: "Yen"
    },
    correctAnswer: "c"
},
{
    question: "4. What is the capital of India?",
    answers:{
        a:"Mumbai",
        b:"Delhi",
        c:"Rajsthan"
    },
    correctAnswer: "b"
}
];

function buildQuiz(){
    const output = []

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = []

        for(letter in currentQuestion.answers){
            answers.push(
                `<label><input type="radio" name="question${questionNumber}" value="${letter}" />${letter} :${currentQuestion.answers[letter]}</label>
                `
            )
        }
        //console.log(answers);
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>
            `
        )
    })
    //console.log(output);
    quizContainer.innerHTML = output.join('')
}
function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers')

    let numCorrect = 0

    myQuestions.forEach((currentQuestion, questionNumber) => {
        //find selected answer
        const answerContainer = answerContainers[questionNumber]
        // input[name=question1]:checked
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++
            answerContainers[questionNumber].style.color = 'green'

        } else {
            answerContainers[questionNumber].style.color = 'red'
        }
    })

    resultsContainer.innerHTML = `Correct Answer is ${numCorrect} out of ${myQuestions.length} 
    & Percentage is 
     ${(numCorrect/myQuestions.length)*100} % out of 100%`
}

buildQuiz()
submitButton.addEventListener('click',showResults)