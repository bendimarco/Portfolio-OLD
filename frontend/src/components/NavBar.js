import React from 'react'
import styled from "styled-components"
import themes from "../themes"
import { HashLink as Link } from 'react-router-hash-link';

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme === "light" ? themes.light.secondaryBackgroundColor : themes.dark.secondaryBackgroundColor};
    font-family: 'Lato', sans-serif;
    color: ${props => props.theme === "light" ? themes.light.mainTextColor : themes.dark.mainTextColor};
`

const ContentContainer = styled.div`
    width: 1100px;
    padding-top: 30px;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    @media (max-width: 1180px) {
        width: 900px;
    }
    @media (max-width: 960px) {
        width: 780px;
    }
    @media (max-width: 800px) {
        width: 480px;
    }
`

const Name = styled.h4`
    font-size: 16px;
    font-weight: 300;
    font-style: italic;
    width: 100px;
`

const NameBold = styled.span`
    font-weight: 600;
`

const Emoji = styled.span`
    font-style: normal;
    margin-left: 6px;
    font-size: 16px;
`

const NavLinkContainer = styled.div`
    position: absolute;
    right: 0;
`

const NavLinkList = styled.ul`
    display: flex;
    list-style: none;
    font-size: 14px;
    font-weight: 300;
    margin-top: 3px;
`

const NavLink = styled.li`
    margin-left: 40px;
    @media (max-width: 800px) {
        display: none;
    }
    
`

const NavLinkDarkMode = styled.li`
    margin-left: 40px;
`

const NavBtn = styled.a`
    text-decoration: none;
    color: ${props => props.theme === "light" ? "#111439" : "#F6F9FC"};
    &:hover {
        color: ${props => props.theme === "light" ? themes.light.hoverTextColor : themes.dark.hoverTextColor};
        transition: 0.1s;
    }
`

export default function NavBar ({theme, setTheme}) {

    function toggleTheme() {
        theme === "light" ? setTheme("dark") : setTheme("light")
    };

    return (
    <Container theme={theme}>
            <ContentContainer>
                <Name><NameBold>Ben</NameBold> DiMarco<Emoji></Emoji></Name>
                <NavLinkContainer>
                    <NavLinkList>
                        {/* <NavLink><NavBtn theme={theme} href={"#"}>About Me</NavBtn></NavLink>
                        <NavLink><NavBtn theme={theme} href={"#"}>My Projects</NavBtn></NavLink>
                        <NavLink><NavBtn theme={theme} href={"#"}>Get In Touch</NavBtn></NavLink> */}
                        <NavLinkDarkMode onClick={toggleTheme}><NavBtn theme={theme} ><i class="fas fa-moon"></i></NavBtn></NavLinkDarkMode>
                    </NavLinkList>
                </NavLinkContainer>
            </ContentContainer>
        </Container>
    )
}