import React, {useState} from "react";
import styleReg from "./Registration.module.css"
import {Button, Form, Steps} from "antd";
import {StepOne} from "./StepOne/StepOne";
import {StepTwo} from "./StepTwo/StepTwo";
import {UnorderedListOutlined, UserAddOutlined, UserSwitchOutlined} from "@ant-design/icons";
import {StepThree} from "./StepThree/StepThree";


export const Registration = () => {

    const [current, setCurrent] = useState<number>(0)

    return (
        <div className="container">

            <div className={styleReg.container__registration}>
                РЕГИСТРАЦИЯ
                <Form layout="vertical">
                    {current === 0 && <>
                        <StepOne/>
                        <div className={styleReg.button}>
                            <Form.Item>
                                <Button onClick={() => setCurrent(1)}>Продолжить регистрацию</Button>
                            </Form.Item>
                        </div>
                    </>}

                    {current === 1 &&
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
                    }
                </Form>

            </div>
            <Steps
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
            />
        </div>
    )
}