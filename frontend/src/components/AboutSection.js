import React, { useState, useRef } from 'react'
import styled from "styled-components"
import gsap from "gsap"
import { useIntersection } from "react-use"

import themes from "../themes"
import LightPhone from "../images/lightphone.svg"
import DarkPhone from "../images/darkphone.svg"
import Zelda from "../images/AboutPhone/irb.png"
import Tyler from "../images/AboutPhone/chamath.png"
import Kevin from "../images/AboutPhone/boypablo.png"
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
`

const ContentContainer = styled.div`
    width: 1100px;
    height: 600px;
    padding-top: 30px;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
`

const TextContainer = styled.div`
    margin-top: 0px;
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
`

const AboutIdDiv = styled.div`
    position: absolute;
    left: -1px;
    width: 2px;
    height: 14px;
    margin-top: 60px;
    background-color: ${props => props.theme === "light" ? themes.light.aboutIdColor : themes.dark.aboutIdColor};
    @media (max-width: 1180px) {
        margin-left: 70px;
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
`

const PhoneContentContainer = styled.div`
    z-index: 9;
`

// const ZeldaImg = styled.img`
//     position: absolute;
//     top: 276px;
//     right: 100px;
//     width: 167px;
//     transition: 0.2s;
//     &:hover {
//         transform: scale(1.05);
//         opacity: 0.8;
//     }
// `

// const TylerImg = styled.img`
//     position: absolute;
//     top: 320px;
//     right: 266px;
//     width: 140px;
//     transition: 0.2s;
//     &:hover {
//         transform: scale(1.04);
//         opacity: 0.8;
//     }
// // `

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
        top: 74px;
    }
`

// const KevinImg = styled.img`
//     position: absolute;
//     top: 64px;
//     right: 100px;
//     width: 306px;
//     transition: 0.2s;
//     &:hover {
//         transform: scale(1.04);
//         opacity: 0.8;
//     }
// `

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
        top: 188px;
        right: 280px;
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
        top: 312px;
        width: 130px;
        right: 280px;
    }
// `

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
        top: 190px;
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
        top: 190px;
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
        top: 270px;
    }
`


const SwiftImg = styled.img`
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
        top: 424px;
        right: 130px;
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
        top: 427px;
        right: 181px;
    }
`

const JSImg = styled.img`
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
        top: 424px;
        right: 226px;
    }
`

const PhoneImg= styled.img`
    margin-left: 50px;
    @media (max-width: 1180px) {
        width: 80%;
        margin-left: 30px;
    }
`

export default function AboutSection ({ theme }) {

    const sectionRef = useRef(null)

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '150px',
        threshold: 1,
    })

    const fadeIn = element => {
        gsap.to(element, 1, {
            opacity: 1,
            y: 60,
            ease: 'power4.out',
            stagger: {
                amount: 0.4
            },
        })
    }

    const fadeOut = element => {
        gsap.to(element, 1, {
            opacity: 0,
            y: 20,
            ease: 'power4.out',
            // stagger: {
            //     amount: 0.1
            // },
        })
    }

    intersection && intersection.intersectionRatio < 1 ?
    fadeOut(".fadeIn")
    :  
    fadeIn(".fadeIn")

    const randStreamer = () => {
        const streamers = ["xqcow", "lirik", "linkus7", "pokelawls", "clintstevens", "sodapoppin", "becca", "emilyywang"]
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
            Hi! My name is Ben and I enjoy creating things that live on the internet. My 
            interest in web development started back in 2012 when I decided to try 
            editing custom Tumblr themes — turns out hacking together a custom reblog 
            button taught me a lot about HTML & CSS!
        </AboutText>
        <AboutText className="fadeIn" theme={theme}>
            {/*className="fadeIn"</TextContainer>*/}
            Fast-forward to today, and I've had the privilege of working at an advertising 
            agency, a start-up, a huge corporation, and a student-led design studio. My 
            main focus these days is building accessible, inclusive products and digital 
            experiences at Upstatement for a variety of clients. My main focus these days 
            is building accessible, inclusive products and digital experiences at 
            Upstatement for a variety of clients.
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
                        {/* <a href="https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb" target="_blank"> */}
                        <a href="https://open.spotify.com/artist/7wbkl3zgDZEoZer357mVIw" target="_blank">
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