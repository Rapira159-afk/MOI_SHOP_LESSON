import React from 'react';
import './Osnova.css'
import {Route } from "react-router-dom";
import {Osnov1} from "./1Rezume/1Rezume";
import {Osnov2} from "./2Znanie/2Znanie";
import {Osnov3} from "./3Raboni/3Raboni";
import {Osnov4} from './4Contact/4Contact';
import {Osnov5} from "./5Uvlech/5Uvlech";
import {Osnov6} from "./6Cherty/6Cherty";

function Osnova(props) {
    return (
          <div>
            <div><Route exact path='/1Rezume' render={()=><Osnov1 Dannie={props.TextR.Dannie}/>}/></div>
            <div><Route exact path='/2Znanie' render={()=><Osnov2/>}/></div>
            <div><Route exact path='/3Raboni' render={()=><Osnov3/>}/></div>
            <div><Route exact path='/4Contact' render={()=><Osnov4/>}/></div>
            <div><Route exact path='/5Uvlech' render={()=><Osnov5/>}/></div>
            <div><Route exact path='/6Cherty' render={()=><Osnov6/>}/></div>
        </div>
    )
}

export {Osnova};