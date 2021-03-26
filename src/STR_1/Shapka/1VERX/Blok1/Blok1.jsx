import React from 'react';
import q from './Blok1.module.css';
import {Logotip} from "./LOGO/LOGO";
import {LOGO2} from "./LOGO2/LOGO2";


const Blok1 = () => {
    return (<div className= {q.Blok1}>
        <div><Logotip/></div>
        <div><LOGO2/></div>
       </div>)
};
export {Blok1};