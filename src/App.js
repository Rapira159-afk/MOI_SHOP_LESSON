import './App.css';
import React from 'react';
import { Str_1 } from './STR_1/Str_1';


function App(props) {
  return (
      <div className='STR_1'><Str_1 State={props.State}/></div>
  );
}


export default App;

