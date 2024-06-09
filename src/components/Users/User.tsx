import React from "react";
import {Avatar, Badge, ConfigProvider, Descriptions, DescriptionsProps, Space} from "antd";
import {UserOutlined} from "@ant-design/icons";
import styleUS from "./User.module.css"

export const User = () => {

    const basicInformation: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Имя Фамилия Отчество',
            children: 'Сергей Сергеев Сергеевич',
        },
        {
            key: '2',
            label: 'Телефон',
            children: '+79001115454',
        },
        {
            key: '3',
            label: 'Город проживания',
            children: 'Москва',
        },
        {
            key: '4',
            label: 'Возраст',
            children: '26',
        },
        {
            key: '5',
            label: 'Спортивный разряд',
            children: 'КМС',
        },
        {
            key: '5',
            label: 'ID',
            children: 1566,
            span: 2,
        },
    ];

    const competition: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Рейтинг',
            children: 1256,
        },
        {
            key: '2',
            label: 'Участий в турнирах',
            children: 7,
            span: 2
        },
        {
            key: '3',
            label: 'Побед на левой руке',
            children: 26,
        },
        {
            key: '3',
            label: 'Побед на правой руке',
            children: 34,
        },

    ];

    const judging: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Судейская категория',
            children: 'ВК',
        },
        {
            key: '2',
            label: 'Судейство на соревнованиях',
            children: 8,
            span: 2
        },
    ]

    const organization: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Проведено соревнований',
            children: 3,
        },
        {
            key: '2',
            label: 'Доступно к проведению',
            children: 0,
        },
    ];
    return (
        <div className='container'>
            <ConfigProvider
                theme={{
                    components: {
                        Descriptions: {
                            contentColor: '#E6C3A5',
                            labelBg: 'rgba(255,255,255,0.07)',
                            titleColor: 'rgba(255,255,255,0.82)',

                        },
                    },
                    token: {
                        colorSplit: 'rgba(255,255,255,0.13)',
                        colorText: '#E6C3A5',
                        colorTextSecondary: 'rgba(255,255,255,0.8)',
                    },
                }}
            >
                <div className={styleUS.container__profile}>
                    <div>Профиль</div>
                    <Avatar size={150}>USER</Avatar>
                </div>
                <Descriptions title="Основная информация" bordered items={basicInformation} style={{marginBottom:'20px'}}/>
                <Descriptions title="Выступление на соревнованиях" bordered items={competition} style={{marginBottom:'20px'}}/>
                <Descriptions title="Судейство" bordered items={judging} style={{marginBottom:'20px'}}/>
                <Descriptions title="Организация турниров" bordered items={organization}/>
            </ConfigProvider>

        </div>
    )
}