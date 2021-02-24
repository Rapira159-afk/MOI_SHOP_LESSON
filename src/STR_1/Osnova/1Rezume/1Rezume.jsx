import React from 'react';
import { TextR } from '../../../PONO';
import q from './1Rezume.module.css';
import { Imgr1 } from './Rezumeimg/IMG';
import { Qwe } from './Rezumetext/Text';

function Osnov1(props) {
    return (
        <div>
            <div className={q.Osnov1}><div><Imgr1/></div> </div>
            <div className={q.Osnov1}><div><TextR TextR={props.TextR}/></div> </div>
        </div>
    )
};


export {Osnov1};

