import React from "react";
import {ConfigProvider, Select, Input, DatePicker, Space } from 'antd';
import styleFA from './FormAnnouncement.module.css'
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';



export const FormAnnouncement = () => {

    const { RangePicker } = DatePicker;
    const onChangeDate = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
    };

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className={styleFA.form__container}>
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
                    },
                    token: {
                        colorBgContainer: "rgba(0,0,0,0)",
                        colorText: "#fff",
                        colorBgElevated: "rgb(56,56,63)",
                        colorTextPlaceholder:  "rgba(255,255,255,0.51)",
                        colorBorder: "rgba(255,255,255,0.51)",
                        colorTextQuaternary: 'rgba(255,255,255,0.51)',
                        colorTextTertiary: 'rgba(255,255,255,0.86)',
                        controlItemBgActive: 'rgba(255,255,255,0.38)',
                    },
                }}
            >

                <Select
                    showSearch
                    placeholder="Страна"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[
                        {
                            value: 'RU',
                            label: 'Russia',
                        },
                        {
                            value: 'GE',
                            label: 'Georgia',
                        },
                        {
                            value: 'PL',
                            label: 'Poland',
                        },
                    ]}
                />
                <div className={styleFA.input__container}>
                    <Input placeholder="Наименование турнира"
                           allowClear
                           onChange={onChangeInput} />
                </div>
                <div className={styleFA.input__container}>
                    <Input placeholder="Адрес турнира"
                           allowClear
                           onChange={onChangeInput} />
                </div>
                <Space direction="vertical" size={12}>
                    <DatePicker showTime
                                placeholder="Дата/время турнира"
                                onChange={onChangeDate}
                                format="YYYY-MM-DD HH:mm"
                                onOk={onOk} />
                </Space>
            </ConfigProvider>
        </div>
    )
}