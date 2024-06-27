import React from "react";
import styleReg from "./Registration.module.css"
import {Button, Form} from "antd";
import {StepOne} from "./StepOne/StepOne";


export const Registration = () => {

    return (
        <div className="container">

            <div className={styleReg.container__registration}>
                РЕГИСТРАЦИЯ
                <Form layout="vertical">
                        <StepOne/>
                        <div className={styleReg.button}>
                            <Form.Item>
                                <Button>Зарегистрироваться</Button>
                            </Form.Item>
                        </div>

                    {/*{current === 1 &&
                        <div className={styleReg.twoStepContainer}>
                            <StepTwo/>
                            <div className={styleReg.twoStepButtonContainer}>
                                <Button onClick={() => setCurrent(0)}>Вернуться назад</Button>
                                <Button onClick={() => setCurrent(2)}>Продолжить</Button>
                            </div>

                        </div>
                    }

                    {current === 2 &&
                        <div className={styleReg.threeStepContainer}>
                            <StepThree/>
                            <div className={styleReg.threeStepButtonContainer}>
                                <Button onClick={() => setCurrent(1)}>Вернуться назад</Button>
                                <Button>Зарегистрироваться</Button>
                            </div>

                        </div>
                    }*/}
                </Form>

            </div>
           {/* <Steps
                current={current}
                items={[
                    {
                        title: 'Основные данные',
                        icon: <UnorderedListOutlined/>
                    },
                    {
                        title: 'Выбор профиля',
                        icon: <UserSwitchOutlined />
                    },
                    {
                        title: 'Личная информация',
                        icon: <UserAddOutlined />
                    },
                ]}
            />*/}
        </div>
    )
}