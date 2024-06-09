import React, {useState} from "react";
import styleFA from './FormAnnouncement.module.css'
import {FirstFormPart} from "./FirstFormPart/FirstFormPart";
import {FormCompleted} from "./FormCompleted/FormCompleted";
import {FormSteps} from "./FormSteps/FormSteps";
import {ControlButtons} from "./ControlButtons/ControlButtons";
import {SecondFormPart} from "./SecondFormPart/SecondFormPart";
import {AppWithThirdFormPart} from "./ThirdFormPart/ThirdFormPart";
import {StatusTournamentType} from "../../../../../Typing/TypeFormForAnnouncement";


type FormAnnouncementType = {
    setCreateAnnouncements: (value: boolean) => void
    createAnnouncements: boolean
}

export const FormAnnouncement = (props: FormAnnouncementType) => {

    const [formCompleted, setFormCompleted] = useState<boolean>(false) // смена формы на положительный результат
    const [current, setCurrent] = useState<number>(0) // шаг по форме 0-1-2
    const [country, setCountry] = useState<string>('') // Выбор страны
    const [nameTournament, setNameTournament] = useState<string>('') // Наименование турнира
    const [addressTournament, seAddressTournament] = useState<string>('') // Адрес турнира
    const [preRegistration, setPreRegistration] = useState<boolean>(false) // чек-бокс на предварительную регистрацию
    const [linkForm, setLinkForm] = useState<string>('') // форма на предварительную регистрацию
    const[dateTournament, setDateTournament] = useState<[string, string] | string>('') // вермя начала турнира
    const [weighingDate, setWeighingDate] = useState<[string, string] | string>('') // дата начала - окончания взвешивания
    const [statusTournament, setStatusTournament] = useState<StatusTournamentType>('')


    return (

        <>

            {!props.createAnnouncements && <>
                {!formCompleted && <>
                    <div className={styleFA.form__container}>
                        {current === 0 && <FirstFormPart setCountry={setCountry}
                                                         setNameTournament={setNameTournament}
                                                         seAddressTournament={seAddressTournament}
                                                         preRegistration={preRegistration}
                                                         setLinkForm={setLinkForm}
                                                         setWeighingDate={setWeighingDate}
                                                         setDateTournament={setDateTournament}
                                                         setPreRegistration={setPreRegistration}/>}
                        {current === 1 && <SecondFormPart setStatusTournament={setStatusTournament}
                                                          statusTournament={statusTournament}/>}
                        {current === 2 && <AppWithThirdFormPart/>}
                        <ControlButtons current={current}
                                        setCurrent={setCurrent}
                                        setFormCompleted={setFormCompleted}
                                        setCreateAnnouncements={props.setCreateAnnouncements}/>
                    </div>
                    <FormSteps current={current}/>
                </>}
            </>}


            {formCompleted && <FormCompleted setFormCompleted={setFormCompleted}
                                             setCurrent={setCurrent}
                                             setCreateAnnouncements={props.setCreateAnnouncements}/>}
        </>
    )
}