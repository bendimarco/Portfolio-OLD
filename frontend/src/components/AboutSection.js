import React, { useState, useRef } from 'react'
import styled from "styled-components"
import gsap from "gsap"
import { useIntersection } from "react-use"

import themes from "../themes"
import LightPhone from "../images/lightphone.svg"
import DarkPhone from "../images/darkphone.svg"
import Zelda from "../images/AboutPhone/irb.png"
import Tyler from "../images/AboutPhone/chamath.png"
import Kevin from "../images/AboutPhone/kevin.png"
import Photos from "../images/AboutPhone/photos2.svg"
import PhotosDark from "../images/AboutPhone/photosdark.svg"
import Twitch from "../images/AboutPhone/twitch.svg"
import Spotify from "../images/AboutPhone/spotify.svg"
import Swift from "../images/AboutPhone/swift.svg"
import ReactImg from "../images/AboutPhone/react.svg"
import JS from "../images/AboutPhone/js.svg"

const Container = styled.div`
    width: 100%;
    height: 620px;
    background-color: ${props => props.theme === "light" ? themes.light.primaryBackgroundColor : themes.dark.primaryBackgroundColor};
    font-family: 'Lato', sans-serif;
    color: ${props => props.theme === "light" ? themes.light.mainTextColor : themes.dark.mainTextColor};
    padding-top: 20px;
    @media (max-width: 800px) {
        display: inline-block;
        height: auto;
    }
`

const ContentContainer = styled.div`
    width: 1100px;
    height: 600px;
    padding-top: 30px;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    @media (max-width: 800px) {
        display: inline-block;
    }
    @media (max-width: 800px) {
        width: 100%;
        height: 1080px;
        max-width: 500px;
    }
    @media (max-width: 640px) {
        margin-top: 20px;
        height: 1180px;
    }
    @media (max-width: 460px) {
        height: 1080px;
    }
`

const TextContainer = styled.div`
    margin-top: 60px;
    margin-left: 50px;
    width: 50%;
    @media (max-width: 1180px) {
        width: 50%;
        margin-left: 100px;
    }
    @media (max-width: 960px) {
        margin-left: 190px;
        width: 44%;
    }
    @media (max-width: 800px) {
        width: 100%;
        margin-left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 640px) {
        width: 80%;
    }
`

const TextLink = styled.a`
    text-decoration: none;
    font-weight: 400;
    color: ${props => props.theme === "light" ? themes.light.pTextColor : themes.dark.pTextColor};
`

const AboutIdDiv = styled.div`
    position: absolute;
    left: -0.5px;
    width: 2px;
    height: 14px;
    margin-top: 0px;
    background-color: ${props => props.theme === "light" ? themes.light.aboutIdColor : themes.dark.aboutIdColor};
    @media (max-width: 1180px) {
        margin-left: 70px;
    }
    @media (max-width: 540px) {
        display: none;
    }
`

const AboutId = styled.h2`
    font-size: 14px;
    color: ${props => props.theme === "light" ? themes.light.aboutIdColor : themes.dark.aboutIdColor};
    margin-bottom: 20px;
    font-weight: 700;
`

const AboutHeader = styled.h1`
    font-size: 32px;
    font-weight: 800;
`

const AboutText = styled.p`
    margin-top: 20px;
    font-weight: 300;
    line-height: 24px;
    color: ${props => props.theme === "light" ? themes.light.pTextColor : themes.dark.pTextColor};
`

const PhoneContainer = styled.div`
    width: 50%;
    margin-top: -40px;
    z-index: 7;
    @media (max-width: 1180px) {
        margin-top: -20px;
    }
    @media (max-width: 960px) {
        margin-right: 80px;
        margin-top: 60px;
    }
    @media (max-width: 800px) {
        position: absolute;
        width: 100%;
        height: auto;
        margin: 0;
        margin-top: 20px;
    }
    @media (max-width: 640px) {
        margin-top: 20px;
    }
`

const PhoneContentContainer = styled.div`
    z-index: 9;
`

const KevinImg = styled.img`
    position: absolute;
    top: 60px;
    right: 97px;
    width: 310px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.04);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        width: 280px;
        right: 130px;
        top: 70px;
    }
    @media (max-width: 960px) {
        top: 142px;
        right: 190px;
        width: 250px;
    }
    @media (max-width: 800px) {
        top: 10.5%;
        right: 15%;
        width: 70%;
    }
`

const PhotosImg = styled.img`
    position: absolute;
    top: 190px;
    right: 266px;
    width: 142px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.06);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        width: 130px;
        top: 184px;
        right: 280px;
    }
    @media (max-width: 960px) {
        top: 250px;
        right: 326px;
        width: 112px;
    }
    @media (max-width: 800px) {
        top: 31.5%;
        right: 53%;
        width: 32%;
    }
`

const TylerImg = styled.img`
    position: absolute;
    top: 327px;
    right: 267px;
    width: 140px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.04);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        top: 308px;
        width: 130px;
        right: 280px;
    }
    @media (max-width: 960px) {
        top: 356px;
        right: 326px;
        width: 112px;
    }
    @media (max-width: 800px) {
        top: 53.5%;
        right: 53%;
        width: 32%;
    }
`

const TwitchImg = styled.img`
    position: absolute;
    top: 190px;
    right: 180px;
    width: 88px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.08);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        width: 82px;
        right: 204px;
        top: 186px;
    }
    @media (max-width: 960px) {
        top: 248px;
        right: 256px;
        width: 70px;
    }
    @media (max-width: 800px) {
        top: 31.5%;
        right: 33%;
        width: 20%;
    }
`

const SpotifyImg = styled.img`
    position: absolute;
    top: 190px;
    right: 100px;
    width: 88px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.08);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        width: 82px;
        right: 130px;
        top: 186px;
    }
    @media (max-width: 960px) {
        top: 248px;
        right: 192px;
        width: 70px;
    }
    @media (max-width: 800px) {
        top: 31.5%;
        right: 15%;
        width: 20%;
    }
`

const ZeldaImg = styled.img`
    position: absolute;
    top: 274px;
    right: 102px;
    width: 166px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.05);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        width: 150px;
        right: 132px;
        top: 266px;
    }
    @media (max-width: 960px) {
        top: 318px;
        right: 194px;
        width: 130px;
    }
    @media (max-width: 800px) {
        top: 45.5%;
        right: 16%;
        width: 37%;
    }
`


const JSImg = styled.img`
    position: absolute;
    top: 444px;
    right: 95px;
    width: 63px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        width: 56px;
        top: 420px;
        right: 130px;
    }
    @media (max-width: 960px) {
        top: 450px;
        right: 190px;
        width: 48px;
    }
    @media (max-width: 800px) {
        top: 72.5%;
        right: 15%;
        width: 14%;
    }
`

const ReactAppImg = styled.img`
    position: absolute;
    top: 448px;
    right: 152px;
    width: 56px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        width: 49px;
        top: 423px;
        right: 181px;
    }
    @media (max-width: 960px) {
        top: 453px;
        right: 237px;
        width: 42px;
    }
    @media (max-width: 800px) {
        top: 73.3%;
        right: 28%;
        width: 12%;
    }
`

const SwiftImg = styled.img`
    position: absolute;
    top: 444px;
    right: 202px;
    width: 63px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }
    @media (max-width: 1180px) {
        width: 56px;
        top: 420px;
        right: 226px;
    }
    @media (max-width: 960px) {
        top: 450px;
        right: 278px;
        width: 48px;
    }
    @media (max-width: 800px) {
        top: 72.5%;
        right: 39%;
        width: 14%;
    }
`

const PhoneImg= styled.img`
    margin-left: 50px;
    @media (max-width: 1180px) {
        width: 80%;
        margin-left: 30px;
    }
    @media (max-width: 800px) {
        margin: 0;
        width: 100%;
        margin-left: 50%;
        transform: translateX(-50%);
    }
`

export default function AboutSection ({ theme }) {

    const sectionRef = useRef(null)

    // const intersection = useIntersection(sectionRef, {
    //     root: null,
    //     rootMargin: '150px',
    //     threshold: 1,
    // })

    // const fadeIn = element => {
    //     gsap.to(element, 1, {
    //         opacity: 1,
    //         y: 60,
    //         ease: 'power4.out',
    //         stagger: {
    //             amount: 0.4
    //         },
    //     })
    // }

    // const fadeOut = element => {
    //     gsap.to(element, 1, {
    //         opacity: 0,
    //         y: 20,
    //         ease: 'power4.out',
    //         // stagger: {
    //         //     amount: 0.1
    //         // },
    //     })
    // }

    // intersection && intersection.intersectionRatio < 1 ?
    // fadeOut(".fadeIn")
    // :  
    // fadeIn(".fadeIn")

    const randStreamer = () => {
        const streamers = ["xqc", "lirik", "linkus7", "pokelawls", "clintstevens", "sodapoppin", "lacari", "extraemily"]
        const n = Math.floor(Math.random() * 8)
        return streamers[n]
    }

    const [streamer, setStreamer] = useState(randStreamer())


    return (
        <Container theme={theme}>
        <ContentContainer ref={sectionRef}>
        <TextContainer >
        <AboutIdDiv theme={theme}></AboutIdDiv>
        <AboutId className="fadeIn" theme={theme}>Who am I ?</AboutId>
        <AboutHeader className="fadeIn">A Little About Me ✌️</AboutHeader>
        <AboutText className="fadeIn" theme={theme}>
            Hi! My name is Ben. I am currently a freshman at the University of Maryland studying Computer Science and Robotics. I love listening to podcasts (my favorites are the All In Podcast, the Lex Fridman Podcast, and This Week in Startups), listening to music (Kanye, Jaden Smith, Tame Impala, TWICE), photography, Twitch, and creating websites like this!
        </AboutText>
        <AboutText className="fadeIn" theme={theme}>
            {/*className="fadeIn"</TextContainer>*/}
            I am super interested in all things technology and innovation. I am always up for a long conversation about UI/UX design, XR, DeFi, venture capital, synthetic biology, or climate tech. More information on what im currently working on can be found <TextLink theme={theme} href="https://www.linkedin.com/in/bendimarco/" target="_blank"> <i>on my linkedin</i></TextLink>.
            </AboutText>
        </TextContainer>
        <PhoneContainer>
                    <PhoneImg src={theme === "light" ? LightPhone : DarkPhone}/>
                    <PhoneContentContainer>
                        <a href="https://iribe.umd.edu/" target="_blank">
                            <ZeldaImg src={Zelda}></ZeldaImg>
                        </a>
                        <a href="https://www.youtube.com/channel/UCESLZhusAkFfsNsApnjF_Cg" target="_blank">
                            <TylerImg src={Tyler}></TylerImg>
                        </a>
                        <a href="https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb" target="_blank">
                            <KevinImg src={Kevin}></KevinImg>
                        </a>
                        <a href="https://www.instagram.com/bendimar.co/" target="_blank">
                            <PhotosImg src={theme === "light" ? Photos : PhotosDark}></PhotosImg>
                            {/* src={theme === "light" ? Photos : PhotosDark} */}
                        </a>
                        <a href={"https://www.twitch.tv/"+streamer} target="_blank">
                            <TwitchImg onClick={() => setStreamer(randStreamer())} src={Twitch}></TwitchImg>
                        </a>
                        <a href="https://open.spotify.com/user/b_dimarco" target="_blank">
                            <SpotifyImg src={Spotify}></SpotifyImg>
                        </a>
                        <a href="https://developer.apple.com/swift/" target="_blank">
                            <SwiftImg src={Swift}></SwiftImg>
                        </a>
                        <a href="https://reactjs.org/" target="_blank">
                            <ReactAppImg src={ReactImg}></ReactAppImg>
                        </a>
                        <a href="https://www.javascript.com/" target="_blank">
                            <JSImg src={JS}></JSImg>
                        </a>
                    </PhoneContentContainer>
                </PhoneContainer>
            </ContentContainer>
        </Container>
    )
}

// ✌️