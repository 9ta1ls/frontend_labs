import React , {useState} from 'react';
import { useLocation } from 'react-router-dom';

const TestPage = ({array}) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedItems = searchParams.get('selectedItems');
    const selectedItemsArray = selectedItems ? selectedItems.split(',') : [];

 const [currentQuestionIndex, setCurrentQuestionIndex] = useState(selectedItemsArray[0]);
 const [selectedAnswerId, setSelectedAnswerId] = useState(null);
    

 
 return (
    <>
      <label></label>
    </>
  );
};

export default TestPage;
