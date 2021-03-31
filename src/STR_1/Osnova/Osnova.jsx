import React from 'react';
import { Osnov1 } from './Category/Osnov1/Osnov1';
import './Osnova.css'
import {Route} from 'react-router-dom';
function Osnova(props) {
    return (
         <div>
         <Route exact path='/1Categ' render={()=><div><Osnov1 State={props.State}/></div>}
         />
       
         </div>
        )
}

export {Osnova};