import React from 'react';
import { TextR } from '../../Str_1';
import q from './1Rezume.module.css';
import { Imgr1 } from './Rezumeimg/IMG';


function Osnov1() {
    return (
        <div>
            <div className={q.Osnov1}><div><Imgr1/></div> </div>
            <div className={q.Osnov1}><div><TextR/></div> </div>
        </div>
    )
};

export {Osnov1};

