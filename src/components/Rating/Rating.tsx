import React from "react";
import styleRate from './Rating.module.css'

export const Rating = () => {
    return(
        <div className='container'>
            <div className={styleRate.container__rating}>РЕЙТИНГ</div>
        </div>
    )
}