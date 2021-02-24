import React from 'react';
import q from './4Contact.module.css';
const Osnov4=(props)=> {
    return (
        <div>
            <div className={q.Osnov4}>
                <div>Контактная информация</div> 
                <div>{props.Namber}{props.Email}34e</div>
                </div>

        </div>
    )
};
export {Osnov4};