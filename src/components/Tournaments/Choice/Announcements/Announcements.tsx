import React from "react";
import styleAn from './Announcements.module.css'
import {Button} from 'antd';
import {PlusCircleOutlined} from "@ant-design/icons";
import {FormAnnouncement} from "./FormAnnouncement/FormAnnouncement";


export const Announcements = () => {
    return(
        <div className={styleAn.announcements__container}>
            <div className={styleAn.create__announcement}>
                <Button type="link" icon={<PlusCircleOutlined />} size={'large'}>
                    Создать анонс турнира
                </Button>
                <br/>
                <FormAnnouncement/>
            </div>
            <div className={styleAn.container__lists}>
            </div>
        </div>
    )
}