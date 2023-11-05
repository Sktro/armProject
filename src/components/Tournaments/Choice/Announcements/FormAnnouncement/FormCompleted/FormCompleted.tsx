import React from "react";
import {Button, Result} from "antd";

type FormCompletedType = {
    setFormCompleted: (value: boolean) => void
    setCreateAnnouncements: (value: boolean) => void
    setCurrent: (value: number) => void
}

export const FormCompleted = (props: FormCompletedType) => {
    return (
        <>
             <Result
                status="success"
                title="Заявка на создание анонса принята!"
                subTitle="Информация будет обработана и опубликована в течение 1-5 минут, пожалуйста, подождите."
                extra={[
                    <Button key={"success"} onClick={() => {
                        props.setCreateAnnouncements(true)
                        props.setCurrent(0)
                        props.setFormCompleted(false)
                    }}>Понятно</Button>,
                ]}/>
        </>
    )
}