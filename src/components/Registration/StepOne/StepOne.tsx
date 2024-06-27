import React from "react";
import {Form, Input} from "antd";
import styleReg from "../Registration.module.css";


export const StepOne = () => {
    return (
        <div className={styleReg.container__fullName}>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]} required>
                <Input />
            </Form.Item>
            <Form.Item name="password" label="Пароль" rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="confirmPassword"
                label="Повторите пароль"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, повторите ваш пароль!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('Пароли не совпадают!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
        </div>
    )
}