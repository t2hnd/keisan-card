import React from 'react';
import Result from './Result';

function Card(props) {
  const {question, updateQuestion, idx} = props
  return (
    <li className="card">{question.numbers[0]} - {question.numbers[1]} = 
    <Result question={question} updateQuestion={updateQuestion} idx={idx}/>
    </li>
  );
}

export default Card;
