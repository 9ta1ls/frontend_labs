import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './App.css';


const TestPage = ({ questions }) => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerArray, setAnswerArray] = useState([]);
  const [testCompleted, setTestCompleted] = useState(false);

  useEffect(() => {
    if (testCompleted) {
      navigate("/results", { state: { answers: answerArray, questions: questions } });
    }
  }, [testCompleted, answerArray, navigate]);

  const handleNextQuestion = async () => {
      setAnswerArray(prevAnswerArray => [...prevAnswerArray, selectedAnswer]);
      setSelectedAnswer(null);
      if(questions.length - currentQuestionIndex === 1){
        setTestCompleted(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div id="container">
      <p>{questions[currentQuestionIndex].question}</p>
      <ul>
        {questions[currentQuestionIndex].answers.map((answer, index) => (
          <p key={index}>
            <label>
              <input type="radio" name="answer" value={answer.isCorrect} onChange={handleAnswerChange}/>
              {answer.answer}
            </label>
          </p>
        ))}
      </ul>
      <button onClick={handleNextQuestion} disabled={selectedAnswer === null} >Далі</button>
    </div>
  );
};

export default TestPage;
