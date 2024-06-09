import React from "react";
import styleFA from "../FormAnnouncement.module.css";
import {Checkbox, DatePicker, Input, Select, Space} from "antd";
import {Countries} from "./Countries";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {DatePickerProps, RangePickerProps} from "antd/es/date-picker";

type FirstFormPartType = {
    setCountry: (value: string) => void
    setNameTournament: (value: string) => void
    seAddressTournament: (value: string) => void
    setPreRegistration: (value: boolean) => void
    setLinkForm: (value: string) => void
    setDateTournament: (value: [string, string] | string) => void
    preRegistration: boolean
    setWeighingDate: (value: [string, string] | string) => void
}

export const FirstFormPart = (props: FirstFormPartType) => {

    const onChangeCheckbox = (e: CheckboxChangeEvent) => {
        props.setPreRegistration(e.target.checked)
    };

    const {RangePicker} = DatePicker;


    const onChangeWeighingDate = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {
        props.setWeighingDate(dateString)
        /*console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);*/
    };

    const onOkWeighings = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
    };


    const onChangeDateTournament = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {
        props.setDateTournament(dateString)
        /*console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);*/
    };
    const onOkTournament = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
    };

    const onChangeNameTournament = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setNameTournament(e.target.value);
    };

    const onChangeNameAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.seAddressTournament(e.target.value)
    };

    const onChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setLinkForm(e.target.value)
    };

    const onChangeCountry = (value: string) => {
        props.setCountry(value)
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <>
                        <div className={styleFA.form}>
                            <div className={styleFA.first__part}>
                                <Select
                                    showSearch
                                    placeholder="Страна"
                                    optionFilterProp="children"
                                    onChange={onChangeCountry}
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
                                {props.preRegistration &&
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
                                        onChange={onChangeWeighingDate}
                                        onOk={onOkWeighings}
                                    />
                                </Space>
                            </div>
                        </div>
        </>
    )
}