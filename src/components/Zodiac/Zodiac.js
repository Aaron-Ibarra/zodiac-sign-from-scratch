import React from 'react';
import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="zodiac">
      <h2 className="name">{props.name}</h2>
      <img src={`/signs/${props.name}.svg`} />
      <h3 className="dates">{props.dates}</h3>
      <p>{props.symbol}</p>
    </div>
  );
}
