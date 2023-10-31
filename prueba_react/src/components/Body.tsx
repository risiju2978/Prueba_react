import React, { useState } from 'react';
import logo from '../logo.svg';
import './App.css';

interface Iprops {
  background?: string;
  color?: string;
  count?: number;
  add: () => void;
  remove: () => void;
}

function Body({background, color,count,add,remove}: Iprops) {

  return (
    <div className="App" style={{background, color}}>
      <header className="App-header">
        <p style={{color}}>
          Contador
        </p>
        <p style={{color}}>
       { count }
        </p>

       <button onClick={add}>sumar</button>
       <button onClick={remove}>restar</button>
      </header>
    </div>
  );
}

export default Body;
