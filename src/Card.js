import './App.css';
import Result from './Result';

function Card(props) {
  return (
    <li className="card" key={props.idx}>{props.pair[0]} - {props.pair[1]} = <Result pair={props.pair} idx={props.idx}/>
    </li>
  );
}

export default Card;
