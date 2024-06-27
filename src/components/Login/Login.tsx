import React from "react";
import style from "./Login.module.css"
import {Button, Input} from "antd";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";


type LoginPropsType = {
    setLoggedIn: (value: boolean) => void
}

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 16px;
  margin-bottom: 1px;

  &:hover {
    text-decoration: none;
    color: #416dff;
  }

  &.active {
    font-weight: inherit;
    color: #0036d3;
  }
`;

export const Login = (props: LoginPropsType) => {
    return (
        <div className="container">
            <div className={style.container__login}>
                ВХОД
                <div className={style.container__input}>
                    <Input placeholder="Введите email"/>
                    <Input.Password placeholder="Введите пароль"/>
                    <StyledNavLink to="/recovery" type="link">забыли пароль?</StyledNavLink>


                    <>
                        <Link to={'/'} style={{fontSize:"10px"}}>
                            <Button style={{ width: '80px'}} onClick={()=> props.setLoggedIn(true)}>Вход</Button>
                        </Link>
                    </>
                </div>
            </div>
        </div>
    )
}