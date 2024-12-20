const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "Who is the current Prime Minister of France?",
        answers: [
            { text: "Josephine Tourbillon", correct: false },
            { text: "Nicolas Sarkozy", correct: true },
            { text: "Jacques Chirac", correct: false },
            { text: "François Hollande", correct: false }
        ]
    },
    {
        question: "Who is the current President of the United States?",
        answers: [
            { text: "George W. Bush", correct: false },
            { text: "Barack Obama", correct: true },
            { text: "Bill Clinton", correct: false },
            { text: "Donald Trump", correct: false }
        ]   
    },
    {
        question: "Which country is the capital of Italy?",
        answers: [
            { text: "Rome", correct: true },
            { text: "Vatican City", correct: false },
            { text: "London", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which country is the capital of Spain?",
        answers: [
            { text: "Madrid", correct: true },
            { text: "Barcelona", correct: false },
            { text: "London", correct: false },
            { text: "Paris", correct: false }
        ]
    },
    {
        question: "Which country is the capital of Germany?",
        answers: [
            { text: "Berlin", correct: true },
            { text: "London", correct: false },
            { text: "Paris", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which country is the capital of Sweden?",
        answers: [
            { text: "Stockholm", correct: true },
            { text: "London", correct: false },
            { text: "Paris", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which country is the capital of Norway?",
        answers: [
            { text: "Oslo", correct: true },
            { text: "London", correct: false },
            { text: "Paris", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
   // nextButton.classList.remove('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    }
); 
nextButton.style.display = 'none';
}


function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    //nextButton.classList.remove('hidden');
    nextButton.style.display = 'block';
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hidden');
    } else {
        showScore();
    }
}

function showScore() {
    nextButton.style.display = 'none';
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    nextButton.classList.add('hidden');
    scoreElement.innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
    startQuiz();
}

nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', restartQuiz);

startQuiz();