import React from 'react';
import q from './3Raboni.module.css';
import {Link, NavLink} from 'react-router-dom';
function Osnov3(props) {
    return (
        <div>
            <div className={q.Osnov3}>
                <div>{props.Raboti.Q1}</div> 
                <a href={props.Raboti.Q2}>{props.Raboti.Q2}</a>
                <div>{props.Raboti.Q3}</div>
                <div>{props.Raboti.Q4}</div>
                <div>{props.Raboti.Q5}</div>
            </div>
        </div>
    )
};
export {Osnov3};