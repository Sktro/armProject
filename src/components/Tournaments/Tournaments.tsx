import React from "react";
import styleT from './Tournaments.module.css'
import {Outlet} from "react-router-dom";
import {Choice} from "./Choice/Choice";


export const Tournaments = () => {
    return (
        <div className='container'>
            <div className={styleT.container__tournaments}>ТУРНИРЫ</div>
            <Choice/>
            <Outlet/>
        </div>
    )
}