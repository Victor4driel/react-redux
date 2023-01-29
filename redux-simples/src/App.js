import './App.css';
import React, { useState } from 'react'
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

  const [min, setMin] = useState(1)
  const [max, setMax] = useState(1)

  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>
      <div className='linha'>
        <Intervalo 
          onMinChanged={setMin} 
          onMaxChanged={setMax}
          min={min}
          max={max}>
        </Intervalo>
      </div>
      <div className='linha'>
        <Media title='Card 2' min={min} max={max} />
        <Soma title='Card 3' min={min} max={max} />
        <Sorteio title='Card 4' min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
