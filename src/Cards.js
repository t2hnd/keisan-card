import React from 'react';
import Card from './Card';

function Cards(props) {
  const { questions, updateQuestion } = props

  const cards = questions.map((question, idx) =>
    <Card question={question} updateQuestion={updateQuestion} idx={idx} key={idx} />
  );

  return (
    <div className="cards">
      <ul>{cards}</ul>
    </div>
  );
}

export default Cards;
