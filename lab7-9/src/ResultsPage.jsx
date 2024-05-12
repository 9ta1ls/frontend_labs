import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const { state } = useLocation();
  const { answers, questions } = state;

  const calculateScore = () => {
    return answers.filter(answer => answer === "true").length;
  };

  const totalScore = calculateScore();

  const checkIfCorrect = (answers, index) =>{
    return answers[index];
  };

  return (
    <div id="container">
      <h1>Results</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <p>Question: {question.question}</p>
            <p style={{ color: checkIfCorrect(answers, index) === "true" ? 'green' : 'red' }}>
              Your Answer: {checkIfCorrect(answers, index) === "true" ? 'Correct' : 'Incorrect'}
            </p>
            <hr />
          </li>
        ))}
      </ul>
      <p>Total Score: {totalScore} out of {questions.length}</p>
    </div>
  );  
};

export default ResultsPage;
