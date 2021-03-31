import React from 'react';
import './Osnova.css'
import {Route} from 'react-router-dom';
import { Osnov1 } from './Category/Osnov1/Osnov1';
import { Osnov2 } from './Category/Osnov1/Osnov2';
import { Osnov3 } from './Category/Osnov1/Osnov3';
function Osnova(props) {
    return (
         <div>
         <Route exact path='/1Categ' render={()=><div><Osnov1 State={props.State}/></div>}/>
         <Route exact path='/2Glav' render={()=><div><Osnov2 State={props.State}/></div>}/>
         <Route exact path='/3Poisk' render={()=><div><Osnov3 State={props.State}/></div>}/> 
       
         </div>
        )
}

export {Osnova};