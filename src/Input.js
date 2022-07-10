import React from 'react';

function Input(props) {
  let { max, count, setMax, setCount, regenerateQuestions } = props

  function reset() {
    setMax(10);
    setCount(10);
    regenerateQuestions(max, count);
  }

  function handleOnChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // console.log(`${target},${value},${name}`)

    if (name === "max") {
      setMax(value)
    }

    if (name === "count") {
      setCount(value)
    }
  }

  return (
    <div className="input">
      <form>
        <label>
          いくつまで？:
          <input type="text" name="max" value={max} onChange={handleOnChange} />
        </label>
        <label>
          何問？:
          <input type="text" name="count" value={count} onChange={handleOnChange} />
        </label>
        <input type="button" value="reset" onClick={reset} />
      </form>
    </div>
  );
}

export default Input;
