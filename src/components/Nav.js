import React from "react";
import styled from "styled-components";
// import { url } from "inspector";
import image from "./nasa-logo.png";

const StyledNav = styled.nav`
    height: 110px;
    width: 100%;
    background: #fff;
`;

const Logo = styled.img`
    height: 120px;
`;

const NavButton = styled.button`
    width: 120px;
    height: 50px;
    cursor: pointer;
    background-color: #9dc5c3;
    background-image: linear-gradient(315deg, #9dc5c3 0%, #5e5c5c 74%);
    color: #fff;
    font-size: 1.25rem;
    font-family: verdana;
    position: absolute;
    margin: 30px 300px;
`;

const Nav = props => {
    return (
        <StyledNav>
        <Logo src={image}></Logo>
        <NavButton>Home</NavButton>
        </StyledNav>
    );
};
export default Nav;