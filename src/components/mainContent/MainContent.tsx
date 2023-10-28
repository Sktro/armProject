import React from "react";
import styleM from "./MainContent.module.css"
import '../../Styles/common.css'
import {FirstContent} from "./content/FirstContent";
import {Rating} from "./Rating/Rating";

export const MainContent = () => {
    return (
        <main className={styleM.main}>
            <div className={'container'}>
                <div className={styleM.main__row}>
                    <div className={styleM.advertising}>
                        <FirstContent/>
                    </div>
                    <div className={styleM.rating}>
                        <Rating/>
                    </div>
                </div>
            </div>
        </main>
    )
}