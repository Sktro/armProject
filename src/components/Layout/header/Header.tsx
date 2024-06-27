import React from "react";
import stylesH from "./Header.module.css"
import '../../../Styles/common.css'
import logoImg from '../../../img/logo.svg'
import {Link, NavLink} from "react-router-dom";
import {Space, Select, ConfigProvider, Badge, Avatar, Dropdown, MenuProps} from 'antd';
import styled from 'styled-components';


type HeaderType = {
    loggedIn: boolean
    setLoggedIn: (value: boolean) => void
}


const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #E6C3A5;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
    color: white;
  }
`;

const StyledRegistrationButton = styled(NavLink)`
  border: 1px solid white;
  border-radius: 6px;
  padding: 6px;
  color: white;
  font-family: Roboto, sans-serif;
  font-size: 14px;

  &:hover {
    border: 1px solid #4096ff;
    color: #4096ff;
  }
`;

export const Header = (props: HeaderType) => {

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link to={'profile'}>
                    Мой профиль
                </Link>
            ),
        },
        {
            key: '2',
            danger: true,
            label: (<Link to={'/'} onClick={()=> props.setLoggedIn(false)}>
                    Выход
                </Link>
            ),
        },
    ];

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
                            <StyledNavLink to='rating'>Рейтинги</StyledNavLink>
                            <StyledNavLink to='tournaments'>Турниры</StyledNavLink>
                            <StyledNavLink to='coaches'>Тренера</StyledNavLink>
                        </div>
                        <div className={stylesH.header__authorization}>
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
                            {!props.loggedIn &&
                                <>
                                    <StyledNavLink to={"login"} style={{fontFamily: "Roboto, sans-serif"}}
                                                   type="link">войти</StyledNavLink>
                                    <StyledRegistrationButton to='registration'>Регистрация</StyledRegistrationButton>
                                </>
                            }
                            {props.loggedIn &&
                                <Dropdown menu={{items}} className={stylesH.linkProfile}>
                                    <Badge dot>
                                        Artem Petrov <Avatar shape="circle" size="large">A</Avatar>
                                    </Badge>
                                </Dropdown>
                            }
                        </div>

                    </div>
                </div>
            </ConfigProvider>
        </header>
    )
}