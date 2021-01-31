import React from 'react';
import q from './1Rezume.module.css';
import { Imgr1 } from './Rezumeimg/IMG';
import { TextR } from './Rezumetext/Text';

function Osnov1() {
    return (
        <div>
            <div className={q.Osnov1}><div><Imgr1/></div> </div>
            <div className={q.Osnov1}><div><TextR/></div> </div>
        </div>
    )
};

export {Osnov1};

