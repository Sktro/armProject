import React from 'react';
import {Header} from "./components/Layout/header/Header";
import {MainContent} from "./components/mainContent/MainContent";
import {Coaches} from "./components/Coaсhes/Coaches";
import {Rating} from "./components/Rating/Rating";
import {Tournaments} from "./components/Tournaments/Tournaments";
import {Routes, Route} from "react-router-dom";
import {NotFoundPage} from "./components/NotFoundPage/NotFoundPage";
import {Announcements} from "./components/Tournaments/Choice/Announcements/Announcements";
import {Current} from "./components/Tournaments/Choice/Current/Current";
import {Results} from "./components/Tournaments/Choice/Results/Results";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<MainContent/>}/>
                <Route path='rating' element={<Rating/>}/>
                <Route path='tournaments/*' element={<Tournaments/>}>
                    <Route path="announcements" element={<Announcements/>}/>
                    <Route path="results" element={<Results/>}/>
                    <Route path="current" element={<Current/>}/>
                </Route>
                <Route path='coaches' element={<Coaches/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>

        </>
    );
}

export default App;
