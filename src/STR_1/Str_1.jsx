import React from 'react';
import './Str_1.css'
import { Osnova } from './Osnova/Osnova';
import { Shapka } from './Shapka/Shapka';
import { Spisok_L } from './Spisok_L/Spisok_L';
import {Right} from "./Right/Right";
import {BrowserRouter} from "react-router-dom";
import { Qwe } from './Osnova/1Rezume/Rezumetext/Text';

function Str_1() {
  return (
    <div className='STR_1'>
      <div className='Shapka'><Shapka /></div>
      <div><Spisok_L /></div>
      <div><Right /></div>

      <div className='Osnova'><Osnova /></div>
    </div>
  );
}


const TextR = ()=> {
    return (
<Qwe Name='Петько Анатолий Казимирович' Year='Год рождения 1992' Email='Email: Apetko@list.ru'
Experience='Опыт прграммирования c 2020' Thepost='Должность Frontend разработчик' Education='Образование в области программирования'/>      
    )
};
export {Str_1, TextR };