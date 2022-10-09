import React from 'react'
import styled from 'styled-components'

import bg from '../../images/Podcasts/pod-bg.svg'
import darkbg from '../../images/Podcasts/pod-bg-dark.svg'
import tim from '../../images/Podcasts/timferriss.png'
import allin from '../../images/Podcasts/allin.png'
import lex from '../../images/Podcasts/lex.png'
import twist from '../../images/Podcasts/twist.png'

import themes from "../../themes"

const Container = styled.div`
    position: absolute;
    width: 28%;
    top: 70px;
    right: 100px;
    height: 360px;
    z-index: 1;
    overflow: hidden;
    @media (max-width: 1180px) {
        width: 28%;
        top: 62px;
        right: 40px;
        height: 290px;
    }
    @media (max-width: 960px) {
        width: 28%;
        top: 60px;
        right: 90px;
        height: 294px;
    }
    @media (max-width: 800px) {
        position: absolute;
        right: 16%;
        width: 68%;
        height: auto;
        margin: 0;
        margin-top: 20px;
    }
    @media (max-width: 516px) {
        margin-top: 0px;
    }
    @media (max-width: 396px) {
        margin-top: -10px;
    }
`

const ContentContainer = styled.div`
    width: 100%;
    position: relative;
    z-index: 2;
`

const ViewMoreButton = styled.a`
    font-weight: 500;
    line-height: 18px;
    font-size: 11px;
    color: ${props => props.theme === "light" ? themes.light.viewMoreBtnColor : themes.dark.viewMoreBtnColor};
    text-decoration: none;
    transition: 0.2s;
    @media(max-width: 1180px) {
        font-size: 10px;
    }
    @media (max-width: 390px) {
        font-size: 9px;
    }
`

const Arrow1 = styled.div`
    width: 1px;
    height: 4px;
    background-color: ${props => props.theme === "light" ? themes.light.viewMoreBtnColor : themes.dark.viewMoreBtnColor};
    transform:rotate(90deg);
    position: absolute;
    transform: rotate(45deg);
    top: 11px;
    left: 76px;
`

const Arrow2 = styled.div`
    width: 1px;
    height: 4px;
    background-color: ${props => props.theme === "light" ? themes.light.viewMoreBtnColor : themes.dark.viewMoreBtnColor};
    position: absolute;
    transform: rotate(-45deg);
    top: 9px;
    left: 76px;
`

const ButtonHolder = styled.div`
    transition: 0.1s;
    top: 22%;
    right: 65%;
    position: absolute;
    // background-color: #f00;
    // margin-top: 60px;
    cursor: pointer;
    &:hover {
        ${ViewMoreButton} {
            color: ${props => props.theme === "light" ? themes.light.viewMoreBtnHoverColor: themes.dark.viewMoreBtnHoverColor};
          }
          ${Arrow1} {
            transition: 0.1s ease-in-out;
            background-color: ${props => props.theme === "light" ? themes.light.viewMoreBtnHoverColor: themes.dark.viewMoreBtnHoverColor};
            left: 80px;
          }
          ${Arrow2} {
            transition: 0.1s ease-in-out;
            background-color: ${props => props.theme === "light" ? themes.light.viewMoreBtnHoverColor: themes.dark.viewMoreBtnHoverColor};
            left: 80px;
          }
    }
    @media(max-width: 1180px) {
        right: 64%;
        top: 21%;
    }
    @media(max-width: 800px) {
        right: 68%;
        top: 22%;
    }
    @media (max-width: 516px) {
        right: 64%;
        top: 21.5%;
    }
    @media (max-width: 390px) {
        right: 64%;
        top: 21%;
    }
`

const Pod1Img = styled.img`
    position: absolute; 
    width: 36%;
    top: 38%;
    right: 51%;
    object-fit: cover;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transition: 0.2s;
        transform: scale(1.04);
    }
`

const Pod2Img = styled.img`
    position: absolute; 
    width: 36%;
    top: 38%;
    right: 12.6%;
    object-fit: cover;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transition: 0.2s;
        transform: scale(1.04);
    }
`

const Pod3Img = styled.img`
    position: absolute; 
    width: 36%;
    top: 70%;
    right: 51%;
    height: 20%;
    object-fit: cover;
    object-position: top;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transition: 0.2s;
        transform: scale(1.04);
    }
`

const Pod4Img = styled.img`
    position: absolute; 
    width: 36%;
    top: 70%;
    right: 12.6%;
    height: 20%;
    object-fit: cover;
    object-position: top;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transition: 0.2s;
        transform: scale(1.04);
    }
`


const BgImg = styled.img`
    margin: 0;
    padding: 0;
    width: 100%;
`

const Books = ({ theme, setTheme, setPods }) => {
  return (
    <Container>

        <ContentContainer>
        <BgImg src={theme === "light" ? bg : darkbg}></BgImg>
            <ButtonHolder className="fadeInProject" theme={theme}>
                    <ViewMoreButton theme={theme} target="_blank" onClick={() => setPods(false)} >Return Home </ViewMoreButton>
                    <Arrow1 theme={theme}/>
                    <Arrow2 theme={theme}/>
            </ButtonHolder>
            <a target="_blank" href="https://podcasts.apple.com/us/podcast/the-tim-ferriss-show/id863897795" >
                <Pod1Img src={tim}></Pod1Img>
            </a>
            <a target="_blank" href="https://podcasts.apple.com/us/podcast/all-in-with-chamath-jason-sacks-friedberg/id1502871393" >
                <Pod2Img src={allin}></Pod2Img>
            </a>
            <a target="_blank" href="https://podcasts.apple.com/us/podcast/lex-fridman-podcast/id1434243584" >
                <Pod3Img src={lex}></Pod3Img>
            </a>
            <a target="_blank" href="https://podcasts.apple.com/us/podcast/this-week-in-startups/id315114957" >
                <Pod4Img src={twist}></Pod4Img>
            </a>
        </ContentContainer>
    </Container>
  )
}

export default Books