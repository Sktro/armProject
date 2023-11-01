import React from "react";
import styleCh from "./Choice.module.css"
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  padding: 20px 0 20px 0;
  text-decoration: none;
  width: 100%;
  color: #E6C3A5;
  text-align: center;

  &:hover {
    background-color: #2a2a31;
  }

  &.active {
    font-weight: bold;
    color: white;
    background-color: #38383f;
  }
`;

export const Choice = () => {
    return (
        <div className={styleCh.container__links}>
            <StyledNavLink to='announcements'>Анонсы</StyledNavLink>
            <StyledNavLink to='results'>Результаты</StyledNavLink>
            <StyledNavLink to='current'>Текущие</StyledNavLink>
        </div>
    )
}