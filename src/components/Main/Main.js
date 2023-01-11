import React from 'react';
import './Main.css';
import { zodiac } from '../../data.js';
import Zodiac from '../Zodiac/Zodiac.js';
import background from '../../starry-background.jpg';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((sign) => (
        <Zodiac key={sign.id} name={sign.name} dates={sign.dates} symbol={sign.symbol} />
      ))}
    </main>
  );
}
