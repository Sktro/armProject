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
import {User} from "./components/Users/User";
import {Registration} from "./components/Registration/Registration";
import {ConfigProvider} from "antd";

function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Select: {
                            selectorBg: 'rgba(255,255,255,0)',
                            optionSelectedColor: "#fff",
                            optionSelectedBg: "#46464f",
                        },
                        Input: {
                            activeBg: "rgba(0,0,0,0)",
                        },
                        Button: {
                            primaryShadow: "rgba(255,255,255,0.51)"
                        },
                        Segmented: {
                            itemSelectedBg: "rgba(255,255,255,0.51)",
                            itemSelectedColor: "rgb(0,0,0)",
                            itemHoverColor: "rgba(255,255,255,0.51)",
                            itemHoverBg: "rgba(255,255,255,0.09)",
                            itemColor: "rgba(255,255,255,0.51)",
                        },
                    },
                    token: {
                        colorBgLayout: "rgb(38,38,43)",
                        colorSplit: "rgba(255,255,255,0.51)",
                        colorBgContainer: "rgba(0,0,0,0)",
                        colorText: "#fff",
                        colorBgElevated: "rgb(56,56,63)",
                        colorTextPlaceholder: "rgba(255,255,255,0.51)",
                        colorBorder: "rgba(255,255,255,0.51)",
                        colorTextQuaternary: 'rgba(255,255,255,0.51)',
                        colorTextTertiary: 'rgba(255,255,255,0.86)',
                        controlItemBgActive: 'rgba(255,255,255,0.38)',
                    },
                }}>
            <Header/>
            <Routes>
                <Route path='/' element={<MainContent/>}/>
                <Route path='registration' element={<Registration/>}/>
                <Route path='rating' element={<Rating/>}/>
                <Route path='users' element={<User/>}/>
                <Route path='tournaments/*' element={<Tournaments/>}>
                    <Route path="announcements" element={<Announcements/>}/>
                    <Route path="results" element={<Results/>}/>
                    <Route path="current" element={<Current/>}/>
                </Route>
                <Route path='coaches' element={<Coaches/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
            </ConfigProvider>
        </>
    );
}

export default App;
