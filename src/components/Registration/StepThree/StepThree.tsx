import React from "react"
import {DatePicker, Form, Input, Select, Upload} from "antd";
import {countries} from "./Countries";
import style from "../Registration.module.css";
import {CloudUploadOutlined, PlusOutlined} from "@ant-design/icons";

export const StepThree = () => {

    const countriesOptions = countries.map(country => ({value: country, label: country}));

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList.slice(-1)
    };

    return (
        <div className={style.switchStepThreeContainer}>
            <div>
                <Form.Item label="Страна проживания">
                    <Select style={{width: "300px"}} defaultValue="Russia" options={countriesOptions}></Select>
                </Form.Item>

                <Form.Item required label="Город" name="city">
                    <Input/>
                </Form.Item>
            </div>

            <div className={style.dateAndGender}>
                <Form.Item required label="Дата рождения">
                    <DatePicker placeholder='Установите дату'/>
                </Form.Item>

                <Form.Item label="Пол">
                    <Select defaultValue="male">
                        <Select.Option value="male">мужской</Select.Option>
                        <Select.Option value="female">женский</Select.Option>
                    </Select>
                </Form.Item>
            </div>



            <div className={style.stepThreeInfo}>
                <Form.Item required label="Телефон">
                    <Input style={{width: "300px"}}/>
                </Form.Item>

                <Form.Item label="Команда" name="team">
                    <Input style={{width: "300px"}}/>
                </Form.Item>

                <Form.Item label="Тренер" name="trainer">
                    <Input style={{width: "300px"}}/>
                </Form.Item>

                <Form.Item label="Фото" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-circle" maxCount={1}>
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <CloudUploadOutlined />
                            <div style={{ marginTop: 9}}>Фото</div>
                        </button>
                    </Upload>
                </Form.Item>
            </div>


        </div>
    )
}