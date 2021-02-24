import './App.css';
import React from 'react';
import { Str_1 } from './STR_1/Str_1';


function App(props) {
  return (
      <div className='STR_1'><Str_1 TextR={props.TextR} Con={props.Con} /></div>
  );
}


export default App;

