import React from 'react';
import './App.css';
import {Header} from "./components/Layout/header/Header";
import {MainContent} from "./components/mainContent/MainContent";
import {Coaches} from "./components/Coaсhes/Coaches";
import {Rating} from "./components/Rating/Rating";
import {Tournaments} from "./components/Tournaments/Tournaments";
import {TournamentResults} from "./components/TournamentResults/TournamentResults";
import {Routes, Route} from "react-router-dom";
import {NotFoundPage} from "./components/NotFoundPage/NotFoundPage";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<MainContent/>}/>
                <Route path='/rating' element={<Rating/>}/>
                <Route path='/tournaments' element={<Tournaments/>}/>
                <Route path='/coaches' element={<Coaches/>}/>
                <Route path='/tournamentResults' element={<TournamentResults/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>

        </>
    );
}

export default App;
