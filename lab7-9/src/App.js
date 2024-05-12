import React , {useEffect, useState}from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectQuestionsPage from './SelectQuestionsPage';
import TestPage from './TestPage';
import ResultsPage from './ResultsPage';

const App = () => {
    let [questions, setQuestions] = useState([
        {
          question: "Яка порода собак вважається найшвидшою?",
          answers: [
            {
              answer: "Німецька вівчарка",
              isCorrect: false,
            },
            {
              answer: "Лабрадор ретривер",
              isCorrect: false,
            },
            {
              answer: "Сірійхаунд",
              isCorrect: true,
            },
            {
              answer: "Бульдог",
              isCorrect: false,
            }
          ],
        },
        {
          question: "Яку унікальну здатність мають собаки, яка відрізняє їх від людей?",
          answers: [
            {
              answer: "Бачити ультрафіолет",
              isCorrect: false,
            },
            {
              answer: "Відчувати магнітне поле Землі",
              isCorrect: true,
            },
            {
              answer: "Слухати ультразвук",
              isCorrect: false,
            },
            {
              answer: "Бачити в повній темряві",
              isCorrect: false,
            }
          ],
        },
        {
          question: "Скільки зубів зазвичай має доросла собака?",
          answers: [
            {
              answer: "24",
              isCorrect: false,
            },
            {
              answer: "32",
              isCorrect: false,
            },
            {
              answer: "42",
              isCorrect: true,
            },
            {
              answer: "36",
              isCorrect: false,
            }
          ],
        },
        {
          question: "Яка порода собак є найменшою у світі?",
          answers: [
            {
              answer: "Чихуахуа",
              isCorrect: true,
            },
            {
              answer: "Померанський спіц",
              isCorrect: false,
            },
            {
              answer: "Йоркширський тер'єр",
              isCorrect: false,
            },
            {
              answer: "Дакшунд",
              isCorrect: false,
            }
          ],
        },
        {
          question: "Яка порода собак відома своєю здатністю плавати?",
          answers: [
            {
              answer: "Лабрадор ретривер",
              isCorrect: true,
            },
            {
              answer: "Бульдог",
              isCorrect: false,
            },
            {
              answer: "Доберман",
              isCorrect: false,
            },
            {
              answer: "Ши-тцу",
              isCorrect: false,
            }
          ],
        }
      ]);
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectQuestionsPage questions={questions} setQuestions={setQuestions}/>} />   
          <Route path="/test" element={<TestPage questions={questions}/>} />  
          <Route path="/results" element={<ResultsPage/>} />   
        </Routes>
      </BrowserRouter>
    );
};

export default App;
