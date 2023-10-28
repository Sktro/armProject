import React from "react";
import styleC from "./Content.module.css"
import {Button, ConfigProvider, Pagination, Space} from 'antd';

export const FirstContent = () => {


    return (
        <>
            <div className={styleC.content}>
                <ConfigProvider
                    theme={{
                        components: {
                            Pagination: {
                                itemActiveBg: 'rgba(0, 0, 0, 0.15)',
                                colorPrimary: '#FFF',
                                colorPrimaryHover: '#FFF',
                                colorText: 'rgba(255,255,255,0.66)'
                            }
                        },
                        token: {
                            // Seed Token
                            colorPrimary: '#00b96b',
                            borderRadius: 4,
                            paddingXS: 20,

                            // Alias Token
                            colorBgContainer: '#f6ffed',
                        },
                    }}
                >
                <div className={styleC.text1}>Удобное онлайн-приложение</div>
                <div className={styleC.text2}>для организации и проведения <br/> соревнований <br/> по армрестлингу
                </div>
                <div className={styleC.container__button}>
                    <div className={styleC.buttons}>
                            <Space>
                                <Button type="dashed" size={"large"} ghost>
                                    Подробнее
                                </Button>
                                <Button ghost size={"large"}>Создать турнир</Button>
                            </Space>
                    </div>
                </div>

                    <Pagination defaultCurrent={1} total={30} size={"small"}/>

                </ConfigProvider>
            </div>
        </>
    )
}