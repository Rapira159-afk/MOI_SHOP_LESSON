import React from 'react';
import w1 from './w1.jpg';
import w2 from './w2.jpg';
import w3 from './w3.jpg';

function Categ2(props) {
    return (
        <div>
            <div>ФОТО Мужской
            <div>Пиджаки</div>
            <div> <img src={w1} width= '200' height= '250' /></div>
            <div>1000р</div>  
            <div>Майка</div> 
            <div><img src={w2} width= '200' height= '250' /></div>
            <div>1500р</div>
            <div>Пиджаки</div> 
            <div><img src={w3} width= '200' height= '250' /></div>
            <div>1300р</div>
        </div> </div>
    )
};

export {Categ2};