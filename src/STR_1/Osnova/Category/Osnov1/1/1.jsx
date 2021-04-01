import React from 'react';
import q1 from './q1.jpg';
import q2 from './q2.jpg';
import q3 from './q3.jpg';
function Categ1(props) {
    return (
        <div>
            <div>ФОТО Женской одежды
            <div>Блузка</div>
            <div> <img src={q1} width= '200' height= '250' /></div>
            <div>1000р</div>  
            <div>Лифон</div> 
            <div><img src={q2} width= '200' height= '250' /></div>
            <div>1500р</div>
            <div>Маечка</div> 
            <div><img src={q3} width= '200' height= '250' /></div>
            <div>1300р</div>
            </div>
        </div>
    )
};

export {Categ1};


