import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TestPage = ({ questions}) => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerArray, setAnswerArray] = useState([]);

  useEffect(() => {
    console.log(questions);
    console.log(answerArray);
  }, [answerArray]);
  

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setAnswerArray(prevAnswerArray => [...prevAnswerArray, selectedAnswer]);
      console.log(currentQuestionIndex);
      setSelectedAnswer(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      /* navigate("/results"); */
    }
  };
  

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div>
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
