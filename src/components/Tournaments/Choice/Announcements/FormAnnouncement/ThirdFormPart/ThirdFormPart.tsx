import React from "react";
import stilesTFP from "./ThirdFormPart.module.css"
import {Button, Input, InputNumber, Select, Upload, UploadProps, App} from "antd";
import {PhoneOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";


export const ThirdFormPart = () => {

    const {message} = App.useApp();

    const onChangeTextAria = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
    };

    const props: UploadProps = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
            authorization: 'authorization-text',
        },
        maxCount: 1,
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} ошибка загрузки файла.`);
            }
        },
        progress: {
            strokeColor: {
                '0%': '#108ee9',
                '100%': '#87d068',
            },
            size: 3,
            format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
        },
    };

    const {Option} = Select;
    const selectAfter = (
        <Select style={{width: 50}}>
            <Option value="USD">$</Option>
            <Option value="RUB">₽</Option>
            <Option value="EUR">€</Option>
            <Option value="GBP">£</Option>
            <Option value="UAH">₴</Option>
            <Option value="CNY">¥</Option>
            <Option value="TRY">₺</Option>
        </Select>
    );

    return (
        <>
            <div className={stilesTFP.thirdForm__contain}>
                <div className={stilesTFP.financeInput__contain}>
                    <InputNumber addonAfter={selectAfter} style={{width: 150}} placeholder={'Взнос'}/>
                    <InputNumber addonAfter={selectAfter} style={{width: 180, fontSize:'10px'}} placeholder={'Призовой фонд'}/>
                </div>
                <div className={stilesTFP.organizer__contain}>
                    <Input style={{width: "200px"}} placeholder="Организатор" prefix={<UserOutlined/>}/>
                    <Input style={{width: "130px"}} type={'number'} placeholder="Телефон" prefix={<PhoneOutlined/>}/>
                </div>
                <Input style={{width: "340px"}} addonBefore="http://" placeholder={"Ссылка на соц. сети"}/>
                <TextArea showCount maxLength={150} onChange={onChangeTextAria} placeholder="Дополнительные сведения" />
                <div className={stilesTFP.upload__contain}>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined/>}>Добавить афишу</Button>
                    </Upload>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined/>}>Добавить положение</Button>
                    </Upload>
                </div>

            </div>
        </>
    )
}

export const AppWithThirdFormPart = () => {
    return (
        <App>
            <ThirdFormPart/>
        </App>
    );
};