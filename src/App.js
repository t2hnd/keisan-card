import './App.css';
import { useState } from 'react';
import Input from './Input';
import Cards from './Cards';

function generateNumber(max) {
  return Math.floor(Math.random() * max);
}

function generatePair(max) {
  return [generateNumber(max), generateNumber(max)].sort((a,b)=> b-a )
}

function generatePairs(max, count) {
  let pairs = [];
  for(let i = 0; i < count; i++){
    pairs.push(generatePair(max))
  }

  return pairs;
}

function App() {
  const [max, setMax] = useState(10)
  const [count, setCount] = useState(10)

  const pairs = generatePairs(max, count)

  console.log(max)
  return (
    <div className="App">
      <header className="App-header">
        <h1>計算カード</h1>
        <Input max={max} count={count} setCount={setCount} setMax = {setMax} />
        <Cards pairs={pairs}/>

      </header>
    </div>
  );
}

export default App;
