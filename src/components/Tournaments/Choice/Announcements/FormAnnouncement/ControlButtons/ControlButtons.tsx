import React from "react";
import styleBC from "./ControlButtons.module.css"
import {Button, Popconfirm, Tooltip} from "antd";
import {CheckOutlined, CloseOutlined, LeftOutlined, QuestionCircleOutlined, RightOutlined} from "@ant-design/icons";

type ControlButtonsType = {
    current: number
    setCurrent: (value: number) => void
    setFormCompleted: (value: boolean) => void
    setCreateAnnouncements: (value: boolean) => void
}

export const ControlButtons = (props: ControlButtonsType) => {

    const confrim = () => {
        props.setCurrent(0)
        props.setCreateAnnouncements(true)
    }

    return (
        <div className={styleBC.button__contain}>
            {props.current === 2 && <Tooltip title="accept">
                <Button shape="circle" icon={<CheckOutlined/>} onClick={() => props.setFormCompleted(true)}/>
            </Tooltip>}
            {props.current <= 1 && <Tooltip title="next step">
                <Button shape="circle" icon={<RightOutlined/>} onClick={() => props.setCurrent(props.current + 1)}/>
            </Tooltip>}
            {props.current > 0 && <Tooltip title="back step">
                <Button shape="circle" icon={<LeftOutlined/>} onClick={() => props.setCurrent(props.current - 1)}/>
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
    )
}