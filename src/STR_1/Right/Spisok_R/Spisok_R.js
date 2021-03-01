import React from 'react';
import q from './Spisok_R.module.css'
const Spisok_R = (props) => {
  return (<div className={q.stile}>
    <div><a>{props.State.Dannie.Name}</a></div>
    <div><a>.</a></div>
    <div><a>.</a></div>
  </div>)
};
export {Spisok_R};