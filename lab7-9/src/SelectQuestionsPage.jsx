import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SelectQuestionsPage = ({ questions , setQuestions}) => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (index) => {
    setSelectedItems(prevSelectedItems => {
      const updatedSelectedItems = [...prevSelectedItems];
      if (updatedSelectedItems.includes(index)) {
        updatedSelectedItems.splice(updatedSelectedItems.indexOf(index), 1);
      } else {
        updatedSelectedItems.push(index);
      }
      return updatedSelectedItems;
    });
  }

  const handleSubmit = async() => {
    console.log(selectedItems);
      await setQuestions(prevQuestions => prevQuestions.filter((question, index) => selectedItems.includes(index)));
      navigate(`/test`);
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className="question">
          <p>
            {index + 1}. {question.question} <input type="checkbox" onChange={() => handleCheckboxChange(index)} />
          </p>
        </div>
      ))}
      <button onClick={handleSubmit}>Пройти тест</button>
    </div>
  );
};

export default SelectQuestionsPage;
