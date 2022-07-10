import './App.css';
import { useState } from 'react';

function Result(props) {

  const [resultState,setResultState] = useState('')
  const id = `answer-props${props.idx}`
  const result = props.pair[0] - props.pair[1]

  function check(){
    const answer = document.getElementById(id).value;
    const newResult = Number(answer) === result ? "OK":"NG";
    setResultState(newResult)
  }
  // console.log(props)

  return (
    <span>
      <input type="text" name="answer" id={id} /> 
      <input type="button" value="check" onClick={check}/>
      {resultState}
    </span>
  );
}

export default Result;
