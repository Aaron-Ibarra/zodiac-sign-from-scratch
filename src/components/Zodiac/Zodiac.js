import React from 'react';
import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="zodiac">
      <h2>{props.name}</h2>
      <h3>{props.dates}</h3>
      <p>{props.symbol}</p>
    </div>
  );
}
