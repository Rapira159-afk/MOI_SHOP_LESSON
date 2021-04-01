import React from 'react';
import {BrowserRouter, NavLink} from "react-router-dom";

function Osnov1(props) {
    return (
        <div>
            <div> <NavLink to="/1Categ/1">{props.State.Category.Name1}</NavLink></div>
            <div><NavLink to="/1Categ/2">{props.State.Category.Name2}</NavLink></div>
            <div>{props.State.Category.Name3}</div>
            <div>{props.State.Category.Name4}</div>
            <div>{props.State.Category.Name5}</div>
            <div>{props.State.Category.Name6}</div>
            <div>{props.State.Category.Name7}</div>
            <div>{props.State.Category.Name8}</div>
            <div>{props.State.Category.Name9}</div>
            <div>{props.State.Category.Name10}</div>
            <div>{props.State.Category.Name11}</div>
            <div>{props.State.Category.Name12}</div>
            <div>{props.State.Category.Name13}</div>
            <div>{props.State.Category.Name14}</div>
            <div>{props.State.Category.Name15}</div>
            <div>{props.State.Category.Name16}</div>
            <div>{props.State.Category.Name17}</div>
            <div>{props.State.Category.Name18}</div>
            <div>{props.State.Category.Name19}</div>
            <div>{props.State.Category.Name20}</div>
            <div>{props.State.Category.Name21}</div>
            <div>{props.State.Category.Name22}</div>
            <div>{props.State.Category.Name23}</div>
            <div>{props.State.Category.Name24}</div>
            <div>{props.State.Category.Name25}</div>
            <div>{props.State.Category.Name26}</div>
        </div>
    )
};

export {Osnov1};