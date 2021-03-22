import React from 'react';
import q from './Blok2.module.css'
import {Contri} from "./Contri/Contri";
import {Contri2} from "./Contri2/Contri";

const Blok2 = () => {
    return (<div className={q.Blok2}>
        <div><Contri/></div>
        <div><Contri2/></div>
    </div>)
};
export {Blok2};