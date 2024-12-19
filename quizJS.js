const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    // New Questions
    {
        question: "Which CSS property controls the text size?",
        a: "font-size",
        b: "text-size",
        c: "text-style",
        d: "font-style",
        correct: "a",
    },
    {
        question: "What is the purpose of the <div> tag in HTML?",
        a: "To divide sections of a webpage",
        b: "To add images",
        c: "To create a table",
        d: "To add animations",
        correct: "a",
    },
    {
        question: "Which JavaScript method can be used to round a number to the nearest integer?",
        a: "Math.round()",
        b: "Math.floor()",
        c: "Math.ceil()",
        d: "Math.trunc()",
        correct: "a",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<break>",
        b: "<br>",
        c: "<lb>",
        d: "<hr>",
        correct: "b",
    },
    {
        question: "What does the 'src' attribute in HTML refer to?",
        a: "Source code",
        b: "Source file",
        c: "Script reference",
        d: "Source",
        correct: "b",
    },
    {
        question: "Which JavaScript event occurs when the user clicks on an HTML element?",
        a: "onmouseover",
        b: "onclick",
        c: "onchange",
        d: "onfocus",
        correct: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})