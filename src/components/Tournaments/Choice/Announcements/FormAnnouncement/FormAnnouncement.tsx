import React, {useState} from "react";
import {ConfigProvider,} from 'antd';
import styleFA from './FormAnnouncement.module.css'
import {FirstFormPart} from "./FirstFormPart/FirstFormPart";
import {FormCompleted} from "./FormCompleted/FormCompleted";
import {FormSteps} from "./FormSteps/FormSteps";
import {ControlButtons} from "./ControlButtons/ControlButtons";
import {SecondFormPart} from "./SecondFormPart/SecondFormPart";


type FormAnnouncementType = {
    setCreateAnnouncements: (value: boolean) => void
    createAnnouncements: boolean
}

export const FormAnnouncement = (props: FormAnnouncementType) => {

    const [formCompleted, setFormCompleted] = useState<boolean>(false)
    const [current, setCurrent] = useState<number>(0)


    return (
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
                        itemHoverColor:  "rgba(255,255,255,0.51)",
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
            {!props.createAnnouncements && <>
                {!formCompleted && <>
                    <div className={styleFA.form__container}>
                        {current === 0 && <FirstFormPart/>}
                        {current === 1 && <SecondFormPart/>}
                        <ControlButtons current={current} setCurrent={setCurrent} setFormCompleted={setFormCompleted}
                                        setCreateAnnouncements={props.setCreateAnnouncements}/>
                    </div>
                    <FormSteps current={current}/>
                </>}
            </>}


            {formCompleted && <FormCompleted setFormCompleted={setFormCompleted}
                                             setCurrent={setCurrent}
                                             setCreateAnnouncements={props.setCreateAnnouncements}/>}

        </ConfigProvider>
    )
}