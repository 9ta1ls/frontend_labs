import React , {useEffect, useState}from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectQuestionsPage from './SelectQuestionsPage';
import TestPage from './TestPage';

const App = () => {
  let [questions, setQuestions] = useState([
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
  )

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectQuestionsPage questions={questions} setQuestions={setQuestions}/>} />   
          <Route path="/test" element={<TestPage questions={questions}/>} />         
        </Routes>
      </BrowserRouter>
    );
};

export default App;
