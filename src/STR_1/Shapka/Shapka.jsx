import React from 'react';
import './Shapka.css'
import {Blok1} from "./1VERX/Blok1/Blok1";
import {Blok2} from "./1VERX/Blok2/Blok2";
import {Blok3} from "./1VERX/Blok3/Blok3";
import {Blok4} from "./1VERX/Blok4/Blok4";
import {Blok5} from "./1VERX/Blok5/Blok5";
import {Blok6} from "./1VERX/Blok6/Blok6";

const Shapka = () => {
    return (<div className="Shapka">
        <div><Blok1/></div>
        <div><Blok2/></div>
        <div><Blok3/></div>
        <div><Blok4/></div>
        <div><Blok5/></div>
        <div><Blok6/></div>

    </div>)
};
export {Shapka};