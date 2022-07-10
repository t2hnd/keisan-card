import './App.css';
import React from 'react';
import { useState } from 'react';
import Input from './Input';
import Cards from './Cards';

function generateNumber(max) {
  return Math.floor(Math.random() * max);
}

function generatePair(max) {
  return [generateNumber(max), generateNumber(max)].sort((a,b)=> b-a )
}

function generateQuestions(max, count) {
  let pairs = [];
  for(let i = 0; i < count; i++){
    const question = {
      numbers: generatePair(max),
      answer: '',
      isAnswered: false,
      isCorrectAnswer: false,
    }
    pairs.push(question)
  }

  return pairs;
}

function App() {
  const [max, setMax] = useState(10)
  const [count, setCount] = useState(10)
  const [questions,setQuestions] = useState(generateQuestions(max, count))

  function regenerateQuestions(max, count) {
    const newQuestions = generateQuestions(max, count)
    console.log(newQuestions)
    setQuestions(newQuestions)
  }

  function updateQuestion(question, idx) {
    const newQuestions = [...questions]
    newQuestions[idx] = question
    console.log(newQuestions)
    setQuestions(newQuestions)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>計算カード</h1>
        <Input max={max} 
          count={count} 
          setCount={setCount} 
          setMax = {setMax} 

          regenerateQuestions={regenerateQuestions}/>
        <Cards questions={questions} updateQuestion = {updateQuestion}/>

      </header>
    </div>
  );
}

export default App;
