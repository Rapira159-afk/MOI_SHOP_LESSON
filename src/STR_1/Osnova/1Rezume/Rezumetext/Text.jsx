import React from 'react';
import ReactDOM from 'react-dom';


const TextR = ()=> {
    return (
<Qwe Name='Петько Анатолий Казимирович' Year='Год рождения 1992' Email='Email: Apetko@list.ru'
Experience='Опыт прграммирования c 2020' Thepost='Должность Frontend разработчик' Education='Образование в области программирования'/>      
    )
};
const Qwe = (props) =>{
return (
    <div>{props.Name},{props.Thepost}gh</div>)};


export {TextR};