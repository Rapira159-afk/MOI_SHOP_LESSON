import React from 'react';
import q from './6Cherty.module.css';
function Osnov6(props) {
    return (
        <div>
            <div className={q.Osnov6}>
                <div>{props.Cherty.Q1}</div>
                <div>{props.Cherty.Q2}</div>
                <div>{props.Cherty.Q3}</div>
                <div>{props.Cherty.Q4}</div>
                <div>{props.Cherty.Q5}</div>
            </div>

        </div>
    )
};
export {Osnov6};