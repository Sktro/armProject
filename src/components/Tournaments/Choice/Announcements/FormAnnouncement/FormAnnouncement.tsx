import React, {useState} from "react";
import {
    ConfigProvider,
    Select,
    Input,
    DatePicker,
    Space,
    Checkbox,
    Tooltip,
    Button,
    Steps,
    Result,
    Popconfirm,
} from 'antd';
import styleFA from './FormAnnouncement.module.css'
import type {DatePickerProps, RangePickerProps} from 'antd/es/date-picker';
import type {CheckboxChangeEvent} from 'antd/es/checkbox';
import {Countries} from "./Countries";
import {
    CheckOutlined,
    CloseOutlined, FileAddOutlined, LeftOutlined,
    QuestionCircleOutlined, RightOutlined,
    UnorderedListOutlined,
    UserAddOutlined
} from "@ant-design/icons";


type FormAnnouncementType = {
    setCreateAnnouncements: (value: boolean) => void
    createAnnouncements: boolean
}

export const FormAnnouncement = (props: FormAnnouncementType) => {

    const [check, setCheck] = useState<boolean>(false)
    const [current, setCurrent] = useState<number>(0)
    const [formCompleted, setFormCompleted] = useState<boolean>(false)

    const confrim = () => {
        setCurrent(0)
        props.setCreateAnnouncements(true)
    }

    const onChangeCheckbox = (e: CheckboxChangeEvent) => {
        setCheck(e.target.checked)
        console.log(`checked = ${e.target.checked}`);
    };
    console.log(check)
    const {RangePicker} = DatePicker;


    const onChangeDateWeighings = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    const onOkWeighings = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
    };


    const onChangeDateTournament = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    const onOkTournament = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
    };

    const onChangeNameTournament = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };

    const onChangeNameAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };

    const onChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    };

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

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
                    }
                },
                token: {
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
                        <div className={styleFA.form}>
                            <div className={styleFA.first__part}>
                                <Select
                                    showSearch
                                    placeholder="Страна"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={filterOption}
                                    options={Countries}
                                />
                                <div className={styleFA.input__container}>
                                    <Input placeholder="Название турнира"
                                           allowClear
                                           onChange={onChangeNameTournament}/>
                                </div>
                                <div className={styleFA.input__container}>
                                    <Input placeholder="Адрес турнира"
                                           allowClear
                                           onChange={onChangeNameAddress}/>
                                </div>
                            </div>
                            <div className={styleFA.second__part}>
                                <Checkbox
                                    style={{alignItems: "center", padding: '5px 0 5px 0', justifyContent: "center"}}
                                    onChange={onChangeCheckbox}>Предварительная
                                    регистрация</Checkbox>
                                {check &&
                                    <div className={styleFA.input__container}>
                                        <Input placeholder="Ссылка на регистрацию"
                                               allowClear
                                               onChange={onChangeLink}/></div>}

                                <Space direction="vertical" size={12}>
                                    <DatePicker showTime
                                                placeholder="Старт турнира"
                                                onChange={onChangeDateTournament}
                                                format="YYYY-MM-DD HH:mm"
                                                onOk={onOkTournament}/>
                                </Space>

                                <Space direction="vertical" size={12}>
                                    <RangePicker
                                        placeholder={["Взвешивание, начало", "Окончание"]}
                                        showTime={{format: 'HH:mm'}}
                                        format="YYYY-MM-DD HH:mm"
                                        onChange={onChangeDateWeighings}
                                        onOk={onOkWeighings}
                                    />
                                </Space>
                            </div>
                        </div>
                        <div className={styleFA.button__contain}>
                            {current === 2 && <Tooltip title="accept">
                                <Button shape="circle" icon={<CheckOutlined/>} onClick={() => setFormCompleted(true)}/>
                            </Tooltip>}
                            {current <= 1 && <Tooltip title="next step">
                                <Button shape="circle" icon={<RightOutlined/>} onClick={() => setCurrent(current + 1)}/>
                            </Tooltip>}
                            {current > 0 && <Tooltip title="back step">
                                <Button shape="circle" icon={<LeftOutlined/>} onClick={() => setCurrent(current - 1)}/>
                            </Tooltip>}
                            <Popconfirm
                                style={{boxShadow: 'rgba(0,0,0,0)'}}
                                icon={<QuestionCircleOutlined style={{color: '#faad14'}}/>}
                                title="Стереть всю информацию?"
                                description="Вы уверены? Все данные будут удалены."
                                placement="rightTop"
                                okText="Да"
                                cancelText="Нет"
                                onConfirm={confrim}
                            >
                                <Button danger shape="circle" icon={<CloseOutlined/>}/>
                            </Popconfirm>
                        </div>
                    </div>
                    <div className={styleFA.steps}>
                        <Steps
                            style={{padding: '20px 0 0 0'}}
                            size="default"
                            current={current}
                            items={[
                                {
                                    title: 'Основная информация',
                                    icon: <UnorderedListOutlined/>
                                },
                                {
                                    title: 'Категории',
                                    icon: <UserAddOutlined/>
                                },
                                {
                                    title: 'Дополнительная информация',
                                    icon: <FileAddOutlined/>
                                },
                            ]}
                        />
                    </div>
                </>}

                {formCompleted && <Result
                    status="success"
                    title="Заявка на создание анонса принята!"
                    subTitle="Информация будет обработана и опубликована в течение 1-5 минут, пожалуйста, подождите."
                    extra={[
                        <Button key={"success"} onClick={() => {
                            props.setCreateAnnouncements(true)
                            setCurrent(0)
                            setFormCompleted(false)
                        }}>Понятно</Button>,
                    ]}
                />}
            </>}
        </ConfigProvider>
    )
}