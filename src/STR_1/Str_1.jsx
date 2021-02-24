import React from 'react';
import './Str_1.css'
import { Osnova } from './Osnova/Osnova';
import { Shapka } from './Shapka/Shapka';
import { Spisok_L } from './Spisok_L/Spisok_L';
import {Right} from "./Right/Right";
import {BrowserRouter} from "react-router-dom";


function Str_1(props) {
  return (
    <div className='STR_1'>
      <div className='Shapka'><Shapka /></div>
      <div><Spisok_L /></div>
      <div><Right /></div>
      <div className='Osnova'><Osnova TextR={props.TextR} /></div>
    </div>
  );
}


export {Str_1};