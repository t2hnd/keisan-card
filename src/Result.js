import React from 'react';
import ResultState from './ResultState';

function Result(props) {

  const { question, updateQuestion, idx } = props;
  const id = `answer-props${idx}`

  function check() {
    const result = question.numbers[0] - question.numbers[1]
    question.isAnswered = true
    question.isCorrectAnswer = (Number(question.answer) === result)
    updateQuestion(question, idx)
  }

  function handleChange(event) {
    question.answer = event.target.value;
    updateQuestion(question, idx)
  }

  return (
    <span>
      <input type="text" name="answer" id={id} value={question.answer} onChange={handleChange} />
      <input type="button" value="check" onClick={check} />
      <ResultState question={question} />

    </span>
  );
}

export default Result;
