import React from 'react';
import './Osnova.css'
import {Route } from "react-router-dom";
import {Osnov1} from "./1Rezume/1Rezume";
import {Osnov2} from "./2Znanie/2Znanie";
import {Osnov3} from "./3Raboni/3Raboni";
import {Osnov4} from './4Contact/4Contact';
import {Osnov5} from "./5Uvlech/5Uvlech";
import {Osnov6} from "./6Cherty/6Cherty";

function Osnova() {
    return (
          <div>
            <div><Route exact path='/1Rezume' component={Osnov1}/></div>
            <div><Route exact path='/2Znanie' component={Osnov2}/></div>
            <div><Route exact path='/3Raboni' component={Osnov3}/></div>
            <div><Route exact path='/4Contact' component={Osnov4}/></div>
            <div><Route exact path='/5Uvlech' component={Osnov5}/></div>
            <div><Route exact path='/6Cherty' component={Osnov6}/></div>
        </div>
    )
}

export {Osnova};