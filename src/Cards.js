import './App.css';
import Card from './Card';

function Cards(props) {

  const cards = props.pairs.map((pair,idx) => 
    <Card pair={pair} idx={idx} />
  );

  return (
    <div className="cards">
      <ul>{cards}</ul>
    </div>
  );
}

export default Cards;
