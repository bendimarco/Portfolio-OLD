import React, { useEffect, useState, useRef } from 'react'
import { AnimatePresence } from "framer-motion"
import styled from "styled-components"
import themes from "../themes"
import gsap from "gsap"
import { useIntersection } from "react-use"

import NavBar from "./NavBar"
import Scroll from "./Scroll"
import Books from './Interactions/Books'
import Podcasts from './Interactions/Podcasts'

// import BlankPhone from "../images/blank-phone-vertical.svg"
import LightPhone from "../images/lightphone.svg"
import DarkPhone from "../images/darkphone.svg"
import LightDock from "../images/LandingPhone/light-dock-landing.svg"
import DarkDock from "../images/LandingPhone/darkdock.svg"
import GitHub from "../images/LandingPhone/github.svg"
import Dribbble from "../images/LandingPhone/dribbble.svg"
import AppStore from "../images/LandingPhone/appstore.svg"
import Mail from "../images/LandingPhone/mail.svg"
import LightLeaf from "../images/LandingPhone/leaf-bg.svg"
import DarkLeaf from "../images/LandingPhone/darkleaf.svg"
import Podcast from "../images/LandingPhone/podcast.svg"
import Book from "../images/LandingPhone/books.svg"
import Notes from "../images/LandingPhone/notes.svg"
import News from "../images/LandingPhone/news.svg"
import NewsDark from "../images/LandingPhone/newsdark.svg"
import Iribe from "../images/LandingPhone/iribecenter.png"
import FingerprintSrc from"../images/fingerprint.svg"
// import { useSpring, animated, config } from "react-spring"
import App from '../App'
import gsapCore from 'gsap/gsap-core'

const Container = styled.div`
    width: 100%;
    height: 740px;
    background-color: ${props => props.theme === "light" ? themes.light.secondaryBackgroundColor : themes.dark.secondaryBackgroundColor};
    font-family: 'Lato', sans-serif;
    color: ${props => props.theme === "light" ? themes.light.mainTextColor : themes.dark.mainTextColor};
    padding-top: 20px;
    @media (max-width: 1180px) {
        height: 600px;
    }
    @media (max-width: 800px) {
        // height: auto;
        height: 1160px;
    }
    @media (max-width: 512px) {
        // height: auto;
        height: 1000px;
    }
`

const ContentContainer = styled.div`
    width: 1100px;
    height: 600px;
    padding-top: 30px;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    @media (max-width: 1180px) {
        display: flex;
        width: 900px;
        margin-left: 50%;
    }
    @media (max-width: 800px) {
        display: inline-block;
        width: 90%;
        max-width: 500px;
        margin-left: 50%;
        transform: translateX(-50%);
    }
`

const DotLine1 = styled.div`
    position: absolute;
    width: 1px;
    margin-top: 90px;
    background-image: ${props => props.theme === "light" ? themes.light.dottedLineColor : themes.dark.dottedLineColor};
    background-size: 1px 12px;
    background-repeat: repeat-y;
    height: 2672px;
    @media (max-width: 1180px) {
        display: none;
    }
`

const DotLine2 = styled.div`
    position: absolute;
    right: 0;
    width: 1px;
    margin-top: 90px;
    background-image: ${props => props.theme === "light" ? themes.light.dottedLineColor : themes.dark.dottedLineColor};
    background-position: right;
    background-size: 1px 12px;
    background-repeat: repeat-y;
    -webkit-transition: background-image 0.2s ease-in-out;
    transition: background-image 0.2s ease-in-out;
    height: 540px;
    transition: 0.16s ease;
    @media (max-width: 1180px) {
        display: none;
    }
`

const TextContainer = styled.div`
    margin-top: 60px;
    margin-left: 50px;
    // background-color: #f00;
    width: 50%;
    @media (max-width: 1180px) {
       margin-top: 10px;
       margin-left: 0px;
    }
    @media (max-width: 960px) {
        margin-left: 75px;
    }
    @media (max-width: 800px) {
        margin-top: 10px;
        width: 90%;
        margin-left: 50%;
        transform: translateX(-50%);
        max-width: 500px;
        text-align: center;
     }
`

const HelloText = styled.h1`
    font-size: 88px;
    font-weight: 900;
    @media (max-width: 1180px) {
        font-size: 80px;
    }
`

const DescText = styled.h2`
    font-size: 24px;
    font-weight: 300;
    width: 500px;
    margin-top: 16px;
    line-height: 36px;
    @media (max-width: 1180px) {
        font-size: 20px;
        line-height: 28px;
        margin-top: 10px;
    }
    @media (max-width: 960px) {
        width: 420px;
        font-size: 20px;
    }
    @media (max-width: 960px) {
        width: 100%;
        line-height: 32px;
    }
`

const DescBold = styled.span`
    font-weight: 700;
`

const DescIt = styled.span`
    font-style: italic;
`
const QuoteText = styled.h3`
    margin-top: 20px;
    color: ${props => props.theme === "light" ? themes.light.quoteTextColor : themes.dark.quoteTextColor};
    font-size: 16px;
    font-weight: 300;
    width: 500px;
    line-height: 24px;
    @media (max-width: 1180px) {
        margin-top: 20px;
    }
    @media (max-width: 960px) {
        width: 420px;
        font-size: 14px;
    }
    @media (max-width: 960px) {
        width: 100%;
    }
`

const ButtonText= styled.p`
    font-size: 16px;
    font-weight: 300;
    width: 700px;
    margin-top: 40px;
    @media (max-width: 1180px) {
        position: absolute;
        top: 270px;
        font-size: 16px;
        margin-left: 4px;
    }
    @media (max-width: 960px) {
        width: 500px;
        font-size: 14px;
    }
    @media (max-width: 960px) {
        width: 100%;
        margin-top: 40px;
    }
    @media (max-width: 800px) {
        width: 100%;
        margin-top: 0px;
    }
    @media (max-width: 516px) {
        display: none;
    }
`

const Button= styled.a`
    text-decoration: none;
    font-weight: 700;
    color: ${props => props.theme === "light" ? themes.light.mainTextColor : themes.dark.mainTextColor};
    &:hover {
        color: ${props => props.theme === "light" ? themes.light.hoverTextColor : themes.dark.hoverTextColor};
        transition: 0.2s;
    }
`

const Emoji = styled.span`
    font-style: normal;
    margin-left: 6px;
    font-size: 14px;
`

const AndSymbol= styled.span`
    margin-right: 20px;
    margin-left: 20px;
`

const PhoneContainer = styled.div`
    width: 41%;
    margin-top: -30px;
    margin-left: -30px;
    @media (max-width: 1180px) {
        width: 41%;
        margin-top: -30px;
        margin-left: 50px;
    
    }
    @media (max-width: 960px) {
        margin-left: -75px;
    }
    @media (max-width: 800px) {
        position: absolute;
        width: 100%;
        height: auto;
        margin: 0;
        margin-top: 80px;
    }
    @media (max-width: 516px) {
        margin-top: 20px;
    }
`

const PhoneImg= styled.img`
    margin-left: 50px;
    width: 100%;
    @media (max-width: 800px) {
        margin: 0;
    }
`

// const FingerprintImg = styled(animated.img)`
//     position: absolute;
//     z-index: 2;
//     right: 230px;
//     top: 272px;
//     // opacity: 0;
// `

const ProgressCircleHolder = styled.div`
    position: absolute;
    z-index: 3;
    right: 176px;
    top: 272px;
`

const ScrollHolder = styled.div`
    position: absolute;
    top: 500px;
    left: 44px;
    @media (max-width: 1180px) {
        top: 400px;
        left: 0px;
    }
    @media (max-width: 960px) {
        top: 400px;
        left: 80px;
    }
    @media (max-width: 800px) {
        display: none;
    }
`

// function Fingerprint() {
//     const props = useSpring ({
//         to: { opacity: 1 },
//         from: { opacity: 0 },
//         reset: false,
//         delay: 2600,
//         config: config.molasses
//     })
//     return <FingerprintImg src={FingerprintSrc} />
// }

const PhoneContentContainer = styled.div`
    width: 700px;
    background: #f00;
    @media (max-width: 800px) {
        width: 100%;
        height: auto;
        background: blue;
    }
`

const PhoneDockImg= styled.img`
    position: absolute;
    top: 434px;
    right: 118px;
    width: 276px;
    @media (max-width: 1180px) {
        position: absolute;
        top: 356px;
        right: 46px;
        width: 240px;
    }
    @media (max-width: 960px) {
       right: 96px;
    }
    @media (max-width: 800px) {
        width: 66%;
        top: 69%; //nice
        right: 17%;
    }
`


const GitHubImg = styled.img`
    position: absolute;
    top: 445px;
    right: 316px;
    width: 56px;
    &:hover {
        transition: 0.2s;
        transform: scale(1.1);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        top: 366px;
        right: 222px;
        width: 48px;
    }
    @media (max-width: 960px) {
        right: 270px;
     }
    @media (max-width: 800px) {
        width: 13%;
        left: 22%;
        top: 71%;
    }
`

const DribbbleImg = styled.img`
    position: absolute;
    top: 445px;
    right: 258px;
    width: 56px;
    &:hover {
        transition: 0.2s;
        transform: scale(1.1);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        top: 366px;
        right: 166px;
        width: 48px;
    }
    @media (max-width: 960px) {
        right: 218px;
     }
     @media (max-width: 800px) {
        width: 13%;
        left: 36%;
        top: 71%;
    }
`

// const AppStoreImg = styled.img`
//     position: absolute;
//     top: 447px;
//     right: 196px;
//     width: 56px;
//     transition: 0.2s;
//     &:hover {
//         transform: scale(1.1);
//         opacity: 0.8;
//     }
// `

const MailImg = styled.img`
    position: absolute;
    top: 445px;
    right: 196px;
    width: 56px;
    &:hover {
        transition: 0.2s;
        transform: scale(1.1);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        top: 366px;
        right: 112px;
        width: 48px;
    }
    @media (max-width: 960px) {
        right: 164px;
     }
     @media (max-width: 800px) {
        width: 13%;
        left: 50%;
        top: 71%;
    }
`

const LeafImg = styled.img`
    position: absolute;
    top: 220px;
    right: 197px;
    width: 110px;
    @media (max-width: 1180px) {
        top: 164px;
        right: 110px;
        width: 110px;
    }
    @media (max-width: 960px) {
        right: 162px;
     }
     @media (max-width: 800px) {
        width: 30%;
        right: 34%;
        top: 28%;
    }
`

const PodcastImg = styled.img`
    position: absolute;
    top: 98px;
    right: 135px;
    width: 56px;
    &:hover {
        transition: 0.2s;
        transform: scale(1.1);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        top: 76px;
        right: 62px;
        width: 48px;
    }
    @media (max-width: 960px) {
        right: 114px;
     }
     @media (max-width: 800px) {
        width: 13%;
        left: 64%;
        top: 14%;
    }
`

const BookImg = styled.img`
    position: absolute;
    top: 161px;
    right: 135px;
    width: 56px;
    &:hover {
        transition: 0.2s;
        transform: scale(1.1);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        top: 130px;
        right: 62px;
        width: 48px;
    }
    @media (max-width: 960px) {
        right: 114px;
    }
    @media (max-width: 800px) {
        width: 13%;
        left: 64%;
        top: 24%;
    }
`

const NotesImg = styled.img`
    position: absolute;
    top: 445px;
    right: 135px;
    width: 53px;
    &:hover {
        transition: 0.2s;
        transform: scale(1.16);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        top: 366px;
        right: 60px;
        width: 48px;
    }
    @media (max-width: 960px) {
        right: 112px;
    }
    @media (max-width: 800px) {
        top: 493px;
        width: 61px;
        right: 64px;
    }
    @media (max-width: 800px) {
        width: 13%;
        left: 64%;
        top: 71%;
    }
`

const HealthImg = styled.img`
    position: absolute;
    top: 98px;
    right: 319px;
    width: 60px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.2);
        opacity: 0.8;
    }
`

const IribeImg = styled.img`
    position: absolute;
    top: 66px;
    right: 96px;
    width: 320px;
    transition: 0.2s;
`

// function Text() {
//     const props = useSpring({
//       to: { opacity: 1 },
//       from: { opacity: 0 },
//       reset: true,
//       delay: 1000,
//       config: config.molasses,
//     })
//   }

// const progressCircleState = {
//     size: 100,
//     progress: 68,
//     strokeWidth: 6,
// }


export default function LandingSection ({ theme, setTheme }) {

    const [books, setBooks] = useState(false);
    const [pods, setPods] = useState(false);


    return (
        <Container theme={theme}>
            <NavBar theme={theme} setTheme={setTheme}/>
            <ContentContainer >
                <DotLine1 theme={theme}/>
                <DotLine2 theme={theme}/>
                <TextContainer>
                    <HelloText>Hello</HelloText>
                    <DescText>My name is <DescIt>Ben</DescIt>, and I am a sophomore studying 
                        <DescIt> Computer Science </DescIt> at the 
                        <DescBold> University of Maryland. </DescBold></DescText>
                        <QuoteText theme={theme}>“The greatest lesson that I learned in all of this is that you have to start. Start now, start here, start small and keep it simple.”  <i>- Jack Dorsey</i></QuoteText>
                        <ButtonText>
                            {/* <Button theme={theme} href={"#"}>View My Projects <Emoji>🚚</Emoji></Button> 
                            <AndSymbol>&</AndSymbol> */}
                            <Button theme={theme} href="mailto:bendimarco20@gmail.com" target="_blank">Get In Touch <Emoji>📮</Emoji></Button>
                        </ButtonText>
                </TextContainer>
                <PhoneContainer>
                    <PhoneImg src={theme === "light" ? LightPhone : DarkPhone}/>
                        <PhoneContentContainer>
                            {books ? <Books theme={theme} setBooks={setBooks} /> : <></>}
                            {pods ? <Podcasts theme={theme} setPods={setPods}/> : <></>}
                            <PhoneDockImg src={theme === "light" ? LightDock : DarkDock} />
                            <a href="https://github.com/bendimarco" target="_blank">
                                <GitHubImg src={GitHub}></GitHubImg>
                            </a>
                            <a href="https://dribbble.com/bendimarco" target="_blank">
                                <DribbbleImg src={Dribbble}></DribbbleImg>
                            </a>
                            {/* <a href="#" target="_blank">
                                <AppStoreImg src={AppStore}></AppStoreImg>
                            </a> */}
                            <a href="mailto:bendimarco20@gmail.com" target="_blank">
                                <MailImg src={Mail}></MailImg>
                            </a>
                            <LeafImg src={theme === "light" ? LightLeaf : DarkLeaf}></LeafImg>
                            <PodcastImg onClick={() => setPods(true)} src={Podcast}></PodcastImg>
                            <BookImg onClick={() => setBooks(true)} src={Book}></BookImg>
                            <a href="https://www.apple.com/apple-news/" target="_blank">
                                <NotesImg src={theme === "light" ? News : NewsDark}></NotesImg>
                            </a>
                            {/* <HealthImg src={Notes}></HealthImg> */}
                        </PhoneContentContainer>
                        {/* <ProgressCircleHolder>
                            pain
                        </ProgressCircleHolder> */}
                        {/* <FingerprintImg src={FingerprintSrc}></FingerprintImg> */}
                </PhoneContainer>
                <ScrollHolder>
                <Scroll theme={theme}/>
            </ScrollHolder>
            </ContentContainer>
        </Container>
        // <>
        //     <ProgressCircle size={100} progress={68} strokeWidth={6} circleOneStroke="E8EAEF" circleTwoStroke="FF7474" />
        // </>
    )
}

// {Fingerprint()}
// {/* <IribeImg src={Iribe}></IribeImg> */}