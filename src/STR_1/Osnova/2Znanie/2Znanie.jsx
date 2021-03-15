import React from 'react';
import q from './2Znanie.module.css';

function Osnov2(props) {
    return (<div className={q.Osnov2}>
                <div>
                <ul>
                <li>{props.Znanie.Q1}</li>
                <li>{props.Znanie.Q2}</li>
                <li>{props.Znanie.Q3}</li>
                <li>{props.Znanie.Q4}</li>
                <li>{props.Znanie.Q5}</li>
                </ul>
            </div> </div>

    )
};


export {Osnov2};