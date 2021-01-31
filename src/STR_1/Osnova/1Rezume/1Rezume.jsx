import React from 'react';
import q from './1Rezume.module.css';
import { Imgr1 } from './Rezumeimg/IMG';
import { Qwe } from './Rezumetext/Text';

const TextR = ()=> {
    return (
<Qwe Name='Петько Анатолий Казимирович' Year='Год рождения 1992' Email='Email: Apetko@list.ru'
Experience='Опыт прграммирования c 2020' Thepost='Должность Frontend разработчик' Education='Образование в области программирования'/>      
    )
};

function Osnov1() {
    return (
        <div>
            <div className={q.Osnov1}><div><Imgr1/></div> </div>
            <div className={q.Osnov1}><div><TextR/></div> </div>
        </div>
    )
};

export {Osnov1};

