import React from "react";
import styleRate from "./Rating.module.css"
import {Athlete} from "./Athletes";

export const Rating = () => {

    const topAthleteSort = Athlete.map(athl=>athl).sort((a,b)=> b.rating - a.rating)
    console.log(topAthleteSort)
    const topAthleteJSX = topAthleteSort.map((athl, index) =>
            <li key={index} className={styleRate.container__athlete}>
                <div className={styleRate.index}>{index+1}.</div>
                <div className={styleRate.fullName}>{athl.name}</div>
                <div>{athl.rating}</div>
                <img src={athl.flag} alt={athl.flag}/>
            </li>
    )

    return (
        <div className={styleRate.container__rating}>
            <span className={styleRate.text}>Рейтинг армрестлеров топ - 10</span>
            <ul>
                {topAthleteJSX}
            </ul>
        </div>
    )
}