import React from 'react';
import q from './5Uvlech.module.css';
function Osnov5(props) {
    return (
        <div>
            <div className={q.Osnov5}>
                <div>{props.Uvlech.Q1}</div>
                <div>{props.Uvlech.Q2}</div>
                <div>{props.Uvlech.Q3}</div>
                <div>{props.Uvlech.Q4}</div>
                <div>{props.Uvlech.Q5}</div>
            </div>

        </div>
    )
};
export {Osnov5};