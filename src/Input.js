import './App.css';

function Input(props) {
  let {max, count, setMax, setCount} = props

  function reset() {
    setMax(10);
    setCount(10);
  }

  function handleOnChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // console.log(`${target},${value},${name}`)

    if(name === "max"){
      setMax(value)
    } 

    if(name === "count"){
      setCount(value)
    } 
  }

  return (
    <div className="input">
      <form>
        <label>
          Max:
          <input type="text" name="max" value={max} onChange={handleOnChange}/>
        </label>
        <label>
          Count:
          <input type="text" name="count" value={count} onChange={handleOnChange}/>
        </label>
        <input type="submit" value="reset"  />
      </form>
    </div>
  );
}

export default Input;
