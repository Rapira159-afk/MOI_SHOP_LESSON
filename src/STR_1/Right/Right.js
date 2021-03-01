import React from 'react';
import { Spisok_R } from './Spisok_R/Spisok_R';
import { Spisok_R2 } from './Spisok_R2/Spisok_R2';
import w from './Right.module.css';
function Right(props) {
    return (<div className={w.Right}>
        <div><Spisok_R State = {props.State}/></div>
        <div><Spisok_R2/></div>
        </div>);}
      export {Right};