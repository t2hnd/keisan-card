import React from 'react';

function ResultState(props) {
  const {isAnswered, isCorrectAnswer} = props.question
  const resultState = !isAnswered ? '': isCorrectAnswer ? 'せいかい！':'あってる？'
  return (
    <>
      {resultState}
    </>

  );
}

export default ResultState;
