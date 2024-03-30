const testData = {
    questions: [
        {
            question: "З якого я населеного пункту?",
            answers: [
                {
                    answer: "Городок",
                    isCorrect: false,
                },
                {
                    answer: "Квасилів",
                    isCorrect: true,
                },
                {
                    answer: "Рівне",
                    isCorrect: false,
                },
                {
                    answer: "Вараш",
                    isCorrect: false,
                }
            ],
        },
        {
            question: "Який мій улюблений колір?",
            answers: [
                {
                    answer: "Зелений",
                    isCorrect: true,
                },
                {
                    answer: "Жовтий",
                    isCorrect: false,
                },
                {
                    answer: "Червоний",
                    isCorrect: false,
                },
                {
                    answer: "Чорний",
                    isCorrect: false,
                }
            ],
        },
        {
            question: "Яка моя улюблена пісня Radiohead?",
            answers: [
                {
                    answer: "Jigsaw Falling Into Place",
                    isCorrect: false,
                },
                {
                    answer: "Let Down",
                    isCorrect: true,
                },
                {
                    answer: "Creep",
                    isCorrect: false,
                },
                {
                    answer: "No Surprises",
                    isCorrect: false,
                }
            ],
        },
        {
            question: "У якому місяці я народився?",
            answers: [
                {
                    answer: "Вересень",
                    isCorrect: true,
                },
                {
                    answer: "Грудень",
                    isCorrect: false,
                },
                {
                    answer: "Травень",
                    isCorrect: false,
                },
                {
                    answer: "Липень",
                    isCorrect: false,
                }
            ],
        },
         {
            question: "В якому класі я навчався у школі?",
            answers: [
                {
                    answer: "Український",
                    isCorrect: false,
                },
                {
                    answer: "Англійський",
                    isCorrect: false,
                },
                {
                    answer: "Простий",
                    isCorrect: false,
                },
                {
                    answer: "Математичний",
                    isCorrect: true,
                }
            ],
        }
    ]
};

const testContainer = document.getElementById('test-container');
const resultContainer = document.getElementById('result');
let score = 0;

testData.questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
    
    question.answers.forEach(answer => {
        const answerElement = document.createElement('input');
        answerElement.type = 'radio';
        answerElement.name = `question${index}`;
        answerElement.value = answer.isCorrect;
        const labelElement = document.createElement('label');
        labelElement.textContent = answer.answer;
        
        questionElement.appendChild(answerElement);
        questionElement.appendChild(labelElement);
    });

    testContainer.appendChild(questionElement);
});

function submitTest() {
    testContainer.style.display = 'none';
    resultContainer.textContent = `Your score is ${score} out of ${testData.questions.length}`;
}

