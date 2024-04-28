import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SelectQuestionsPage = ({ array }) => {
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

  const handleSubmit = () => {
    console.log(selectedItems);

    navigate(`/test?selectedItems=${selectedItems.join(',')}`);
  }

  return (
    <div>
      {array.map((question, index) => (
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
