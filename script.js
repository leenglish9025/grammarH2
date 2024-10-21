const questions = [
    {
        question: "1. Emily sat silently, with the dog _____ at her feet.",
        choices: ["dozing", "dozed", "doze", "does"],
        correctAnswer: 0,
        explanation: "정답은 'dozing'입니다. 'with + 명사 + 분사' 구조에서 '현재분사'인 'dozing'이 필요합니다."
    },
    {
        question: "2. By the time I finish that, I _____ the basics of genetic engineering.",
        choices: ["will learn", "will be learning", "will have learned", "learn"],
        correctAnswer: 2,
        explanation: "정답은 'will have learned'입니다. 미래완료 시제로, 특정 시점까지 완료된 동작을 나타냅니다."
    },
    {
        question: "3. He _____ all set by the time you arrive.",
        choices: ["has been", "will have been", "would have been", "will be"],
        correctAnswer: 1,
        explanation: "정답은 'will have been'입니다. 'by the time'은 미래완료 시제를 요구합니다."
    },
    {
        question: "4. I wish we _____ more in Jeju-do then.",
        choices: ["stay", "stayed", "had stayed", "would stay"],
        correctAnswer: 2,
        explanation: "정답은 'had stayed'입니다. 가정법 과거완료로, 과거에 대한 후회를 나타냅니다."
    },
    {
        question: "5. This is the new movie _____ many critics think will be nominated for the Academy Awards this year.",
        choices: ["what", "which", "that", "who"],
        correctAnswer: 1,
        explanation: "정답은 'which'입니다. 선행사를 수식하는 관계대명사로 사용되었습니다."
    },
    {
        question: "6. The truck sped away with smoke _____ out of it.",
        choices: ["pours", "pouring", "poured", "pour"],
        correctAnswer: 1,
        explanation: "정답은 'pouring'입니다. 'with + 명사 + 현재분사' 구조에서 진행 중인 동작을 나타냅니다."
    },
    {
        question: "7. I wish I _____ a famous movie star now.",
        choices: ["was", "were", "is", "are"],
        correctAnswer: 1,
        explanation: "정답은 'were'입니다. 가정법 현재에서 주어가 'I'라도 'were'가 맞습니다."
    },
    {
        question: "8. By the end of the year, Amy _____ the designs before the next meeting.",
        choices: ["will have completed", "will completed", "will be completing", "would have completed"],
        correctAnswer: 0,
        explanation: "정답은 'will have completed'입니다. 미래완료 시제를 사용한 문장입니다."
    },
    {
        question: "9. With his book _____, he is standing by the bookshelf.",
        choices: ["closing", "closed", "close", "closes"],
        correctAnswer: 1,
        explanation: "정답은 'closed'입니다. 'with + 명사 + 분사' 구조에서 완료된 상태를 나타냅니다."
    },
    {
        question: "10. I talked with the scientist _____ people believe invented the new device.",
        choices: ["who", "that", "which", "whom"],
        correctAnswer: 0,
        explanation: "정답은 'who'입니다. 사람을 나타내는 관계대명사로 사용되었습니다."
    }
];

let currentQuestion = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    for (let i = 0; i < 4; i++) {
        document.getElementById("choice" + i).innerText = questions[currentQuestion].choices[i];
    }
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(choice) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (choice === correctAnswer) {
        document.getElementById("feedback").innerText = "정답입니다! " + questions[currentQuestion].explanation;
        document.getElementById("next-btn").style.display = "block";
    } else {
        document.getElementById("feedback").innerText = "오답입니다. 다시 시도해보세요.";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = "<h2>퀴즈가 끝났습니다!</h2>";
    }
}

window.onload = loadQuestion;
