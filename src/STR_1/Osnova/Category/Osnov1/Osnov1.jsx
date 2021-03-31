import React from 'react';

function Osnov1(props) {
    return (
        <div>
          <div><Route exact path='/1Categ' render={()=><Osnov1 State={props.State}/>}/></div>
        </div>
    )
};

export {Osnov1};