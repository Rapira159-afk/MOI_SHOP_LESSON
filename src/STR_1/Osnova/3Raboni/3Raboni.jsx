import React from 'react';
import q from './3Raboni.module.css';
function Osnov3(props) {
    return (
        <div>
            <div className={q.Osnov3}>
                <div>{props.Raboti.Q1}</div> 
                <a href={props.Raboti.Q2}>{props.Raboti.Q2}</a>
                <a30 onClick ={()=> {alert ("ssasasa")}} >Нажми сдесь для вызова функции </a30>
                <div>{props.Raboti.Q3}</div>
                <div>{props.Raboti.Q4}</div>
                <div>{props.Raboti.Q5}</div>
            </div>
        </div>
    )
};
export {Osnov3};