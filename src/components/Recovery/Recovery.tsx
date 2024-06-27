import React, {useState} from "react";
import style from "./Recovery.module.css";
import {Button, Input, Result} from "antd";
import {Link} from "react-router-dom";

export const Recovery = () => {

    const [control, setControl] = useState<boolean>(false)

    return(
        <div className="container">
            <div className={style.container__login}>
                ВОССТАНОВЛЕНИЕ ПАРОЛЯ
                {!control && <div className={style.container__input}>
                    <Input placeholder="Введите email" />
                    <Button onClick={() => setControl(true)}>Отправить</Button>
                </div>}

                {control && <Result
                    status="success"
                    title="Ваша заявка на восстановление пароля принята!"
                    subTitle="На ваш email была отправленна ссылка для воосстановлением пароля, пожалуйста подождите."
                    extra={
                        <Link to={'/'}>
                            <Button type="primary">
                                OK
                            </Button>
                        </Link>
                    }
                />}
            </div>
        </div>
    )
}