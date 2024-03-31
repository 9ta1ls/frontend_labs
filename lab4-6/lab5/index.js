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

const form = document.createElement('form');

testData.questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.setAttribute('id', `question${index}`);

    const questionLabel = document.createElement('label');
    questionLabel.textContent = `${index + 1}. ${question.question}`;
    questionDiv.appendChild(questionLabel);

    questionDiv.appendChild(document.createElement('br'));

    question.answers.forEach((answer, answerIndex) => {
        const answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'radio');
        answerInput.setAttribute('name', `answer${index}`);
        answerInput.setAttribute('value', answer.isCorrect);
        questionDiv.appendChild(answerInput);

        const answerLabel = document.createElement('label');
        answerLabel.textContent = answer.answer;
        questionDiv.appendChild(answerLabel);
    });

    form.appendChild(questionDiv);
});

document.body.appendChild(form);

let answersCollector = [];
let count = 0;



function submitAnsw(){
    for(let i = 0; i < 5; i++){
        let answer = document.querySelector(`input[name='answer${i}']:checked`).value;
        if(answer == "true"){count++};
        answersCollector[i] = answer;
    }
    console.log(answersCollector);
    let results = document.getElementById('results');
    results.style.display = 'flex';
    results.textContent = `Результат ${count}/5`;

    answersCollector.forEach((element , elementIndex) => {
        if(element == 'false'){
            const answerDiv = document.getElementById(`question${elementIndex}`);
            answerDiv.style.backgroundColor = '#BC412B';

            let answer = document.querySelector(`input[name='answer${elementIndex}'][value='true']`);
            const labelForAnswer = answer.nextElementSibling.textContent;
            let correctAnw = answerDiv.appendChild(document.createElement('div'));
            correctAnw.innerHTML = `<p>Правильна відповідь: ${labelForAnswer}</p> `;
            
        }
        if(element == 'true'){
            const answerDiv = document.getElementById(`question${elementIndex}`);
            answerDiv.style.backgroundColor = '#68A357';
        }
    });

}