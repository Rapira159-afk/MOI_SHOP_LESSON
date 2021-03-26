import React from 'react';
import './Str_1.css'

import { Shapka } from './Shapka/Shapka';

import {BrowserRouter} from "react-router-dom";
import { Osnova } from './Osnova/Osnova';


function Str_1(props) {
  return (
    <div className='STR_1'>
      <div className='Shapka'><Shapka /></div>
      <div className='Osnova'><Osnova /></div>

    </div>
  );
}


export {Str_1};