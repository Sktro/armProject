import React, {useState} from "react";
import styleAn from './Announcements.module.css'
import {Button} from 'antd';
import {PlusCircleOutlined} from "@ant-design/icons";
import {FormAnnouncement} from "./FormAnnouncement/FormAnnouncement";


export const Announcements = () => {
    const [createAnnouncements, setCreateAnnouncements] = useState<boolean>(true)
    return (
        <div className={styleAn.announcements__container}>
            <div className={styleAn.create__announcement}>
                {createAnnouncements && <Button type="link"
                                                icon={<PlusCircleOutlined/>}
                                                size={'large'}
                                                onClick={() => setCreateAnnouncements(false)}>
                    Создать анонс турнира
                </Button>}
                <br/>
                <FormAnnouncement setCreateAnnouncements={setCreateAnnouncements} createAnnouncements={createAnnouncements}/>
            </div>
            <div className={styleAn.container__lists}>
            </div>
        </div>
    )
}