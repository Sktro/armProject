import React from "react";
import {FileAddOutlined, UnorderedListOutlined, UserAddOutlined} from "@ant-design/icons";
import {Steps} from "antd";

type FormStepsType = {
    current: number
}

export const FormSteps = (props: FormStepsType) => {
    return (
        <Steps
            style={{padding: '20px 0 0 0'}}
            size="default"
            current={props.current}
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
    )
}