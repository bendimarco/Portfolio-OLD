import React from 'react'
import styled from 'styled-components'

import bg from '../../images/Books/books-bg.svg'
import darkbg from '../../images/Books/books-bg-dark.svg'
import essentialism from '../../images/Books/essentialism.png'
import homodeus from '../../images/Books/homodeus.png'
import linchpin from '../../images/Books/linchpin.png'
import regenesis from '../../images/Books/regenesis.png'
import thepractice from '../../images/Books/thepractice.png'
import zero2one from '../../images/Books/zero2one.png'

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

const Book1Img = styled.img`
    position: absolute; 
    width: 22%;
    top: 42%;
    right: 65%;
    object-fit: cover;
    filter: saturate(1.1);
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transition: 0.2s;
        transform: scale(1.04);
    }
`

const Book2Img = styled.img`
    position: absolute; 
    width: 22%;
    top: 42%;
    right: 38%;
    object-fit: cover;
    filter: saturate(1.1);
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transition: 0.2s;
        transform: scale(1.04);
    }
`

const Book3Img = styled.img`
    position: absolute; 
    width: 22%;
    top: 42%;
    right: 12%;
    object-fit: cover;
    filter: saturate(1.1);
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transition: 0.2s;
        transform: scale(1.04);
    }
`

const Book4Img = styled.img`
    position: absolute; 
    width: 22%;
    top: 72%;
    right: 65%;
    height: 18%;
    object-fit: cover;
    object-position: top;
    filter: saturate(1.1);
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transition: 0.2s;
        transform: scale(1.04);
    }
`

const Book5Img = styled.img`
    position: absolute; 
    width: 22%;
    top: 72%;
    right: 38%;
    height: 18%;
    object-fit: cover;
    object-position: top;
    filter: saturate(1.1);
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transition: 0.2s;
        transform: scale(1.04);
    }
`

const Book6Img = styled.img`
    position: absolute; 
    width: 22%;
    top: 72%;
    right: 12%;
    height: 18%;
    object-fit: cover;
    object-position: top;
    filter: saturate(1.1);
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

const ReturnDiv = styled.div`

`

const Books = ({ theme, setTheme, setBooks }) => {
  return (
    <Container>

        <ContentContainer>
        <BgImg src={theme === "light" ? bg : darkbg}></BgImg>
            <ButtonHolder className="fadeInProject" theme={theme}>
                    <ViewMoreButton theme={theme} target="_blank" onClick={() => setBooks(false)} >Return Home </ViewMoreButton>
                    <Arrow1 theme={theme}/>
                    <Arrow2 theme={theme}/>
            </ButtonHolder>
            <a target="_blank" href="https://books.apple.com/us/book/regenesis/id1209987199" >
                <Book1Img src={regenesis}></Book1Img>
            </a>
            <a target="_blank" href="https://books.apple.com/us/book/homo-deus/id1130849713" >
                <Book2Img src={homodeus}></Book2Img>
            </a>
            <a target="_blank" href="https://books.apple.com/us/book/linchpin/id357913936" >
                <Book3Img src={linchpin}></Book3Img>
            </a>
            <a target="_blank" href="https://books.apple.com/us/book/essentialism/id730186570" >
                <Book4Img src={essentialism}></Book4Img>
            </a>
            <a target="_blank" href="https://books.apple.com/us/book/the-practice/id1513814076" >
                <Book5Img src={thepractice}></Book5Img>
            </a>
            <a target="_blank" href="https://books.apple.com/us/audiobook/zero-to-one-notes-on-startups-or-how-to-build-the/id1417011675" >
                <Book6Img src={zero2one}></Book6Img>
            </a>
        </ContentContainer>
    </Container>
  )
}

export default Books