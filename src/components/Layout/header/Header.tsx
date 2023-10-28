import React from "react";
import stylesH from "./Header.module.css"
import '../../../Styles/common.css'
import logoImg from '../../../img/logo.svg'
import {NavLink} from "react-router-dom";
import {Button, Space, Select, ConfigProvider} from 'antd';
import styled from 'styled-components';


const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #E6C3A5;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
    color: white; /* Примените свои стили здесь */
  }
`;

export const Header = () => {
    return (
        <header className={stylesH.header}>
            <ConfigProvider
                theme={{
                    components: {
                        Select: {
                            optionSelectedBg: 'rgba(255,255,255,0.56)',
                            colorBgElevated: 'rgb(38,38,38)',
                            colorText: '#ffffff',
                            optionSelectedColor: '#000000',
                        },
                    },
                    token: {
                        colorIcon: '#FFF'
                    }
                }}
            >
                <div className={'container'}>
                    <div className={stylesH.header__row}>
                        <div className={stylesH.header__logo}>
                            <img src={logoImg} alt="logo"/>
                            <span>ARM-APP</span>
                        </div>
                        <div className={stylesH.header__nav}>
                            <StyledNavLink to='/'>Как это работает?</StyledNavLink>
                            <StyledNavLink to='/rating'>Рейтинг</StyledNavLink>
                            <StyledNavLink to='/tournaments'>Турниры</StyledNavLink>
                            <StyledNavLink to='/coaches'>Тренера</StyledNavLink>
                            <StyledNavLink to='/tournamentResults'>Результаты соревнований</StyledNavLink>
                            <span>|</span>
                            <Space wrap>
                                <Select
                                    size={"small"}
                                    defaultValue={"RU"}
                                    style={{width: 65}}
                                    bordered={false}
                                    options={[
                                        {value: 'RU', label: 'RU'},
                                        {value: 'EN', label: 'EN'},
                                    ]}
                                />
                            </Space>
                            <Button type="link" size='large'>sing in</Button>
                            <Button ghost>Login</Button>
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </header>
    )
}