import React, { useRef } from 'react'
import gsap from "gsap"
import { useIntersection } from "react-use"

import styled from "styled-components"
import LightPhone from "../images/sideways-phone-blank.svg"
import DarkPhone from "../images/darkphonehorizontal.svg"
import themes from "../themes"

const Container = styled.div`
    width: 100%;
    height: 400px;
    background-color: ${props => props.theme === "light" ? themes.light.primaryBackgroundColor : themes.dark.primaryBackgroundColor};
    font-family: 'Lato', sans-serif;
    color: ${props => props.theme === "light" ? themes.light.mainTextColor : themes.dark.mainTextColor};
    padding-top: 20px;
    margin-top: 60px;
    margin-bottom: 90px;
    // background: #f00;
    @media (max-width: 1180px) {
        height: auto;
        margin-top: 0;
    }
    @media (max-width: 800px) {
        margin-bottom: 60px;
    }
`

const ContentContainer = styled.div`
    width: 1100px;
    height: 400px;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    @media (max-width: 960px) {
        display: inline-block;
        width: 100%;
    }
`

const TextContainer = styled.div`
    margin-left: 50px;
    width: 40%;
    @media (max-width: 1180px) {
        margin-left: 100px;
        width: 34%;
    }
    @media (max-width: 1180px) {
        width: 70%;
    }
    @media (max-width: 540px) {
       width: 80%;
       margin-left: 50%;
       transform: translateX(-50%);
    }
`

const ProjectIdDiv = styled.div`
    position: absolute;
    left: -0.5px;
    width: 2px;
    height: 14px;
    background: -webkit-linear-gradient(15deg, ${props => props.Color1}, ${props => props.Color2});
    @media (max-width: 1180px) {
        margin-left: 60px;
    }
    @media (max-width: 540px) {
        display: none;
    }
`

const ProjectId = styled.h2`
    font-size: 14px;
    color: #CDCDE3;
    margin-bottom: 20px;
    background: -webkit-linear-gradient(${props => props.Color1}, ${props => props.Color2});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;font-weight: 700;

`

const ProjectHeader = styled.h1`
    font-size: 32px;
    font-weight: 800;
`

const ProjectText = styled.p`
    margin-top: 20px;
    font-weight: 300;
    line-height: 24px;
    margin-bottom: 20px;
    color: ${props => props.theme === "light" ? themes.light.pTextColor : themes.dark.pTextColor};
`

const ProjectAccolades = styled.p`
    margin-top: -10px;
    font-weight: 300;
    line-height: 24px;
    margin-bottom: 20px;
    color: ${props => props.theme === "light" ? themes.light.pTextColor : themes.dark.pTextColor};
`

const PhoneContainer = styled.div`
    width: 50%;
    margin-top: -70px;
    height: 300px;
    @media (max-width: 1180px) {
        width: 100%;
        margin-top: -50px;
    }
    @media (max-width: 960px) {
        display: inline-block;
        margin-top: 40px;
    }
`

const PhoneImg= styled.img`
    margin-left: 30px;
    transition: 0.2s;
    // &:hover {
    //     transform: scale(100.01);
    // }
    @media (max-width: 1180px) {
        width: 100%;
        margin-left: 16px;
    }
    @media (max-width: 1180px) {
        margin-left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 540px) {
        width: 100%;
    }
`

const ViewMoreButton = styled.a`
    font-weight: 500;
    line-height: 24px;
    color: ${props => props.theme === "light" ? themes.light.viewMoreBtnColor : themes.dark.viewMoreBtnColor};
    text-decoration: none;
    transition: 0.2s;
    display: none;
    @media (max-width: 800px) {
        display: inline-block;
    }
`

const GitHubIconHolder = styled.div`
    position: absolute;
    top: 10px;
    right: -6px;
    @media (max-width: 1180px) {
        right: 92px;
    }
    @media (max-width: 960px) {
        display: none;
    }
`

const LinkIconHolder = styled.div`
    position: absolute;
    top: 48px;
    right: -6px;
    @media (max-width: 1180px) {
        right: 92px;
    }
    @media (max-width: 960px) {
        display: none;
    }
`

const LinkBtn = styled.a`
    font-size: 1.3rem;
    color: ${props => props.theme === "light" ? themes.light.toolsColor : themes.dark.toolsColor};
    transition: 0.22s;
    &:hover {
        color:  ${props => props.theme === "light" ? themes.light.projectIconHoverColor: themes.dark.projectIconHoverColor};
        // text-shadow: 0px 2px 3px #DADDED55;
    }
`

const GitBtn = styled.a`
    font-size: 1.6rem;
    color: ${props => props.theme === "light" ? themes.light.toolsColor : themes.dark.toolsColor};
    transition: 0.22s;
    &:hover {
        color:  ${props => props.theme === "light" ? themes.light.projectIconHoverColor: themes.dark.projectIconHoverColor};
        // text-shadow: 0px 2px 3px #DADDED55;
    }
`

const Arrow1 = styled.div`
    width: 2px;
    height: 8px;
    background-color: ${props => props.theme === "light" ? themes.light.viewMoreBtnColor : themes.dark.viewMoreBtnColor};
    transform:rotate(90deg);
    position: absolute;
    transform: rotate(45deg);
    top: 11px;
    left: 140px;
    display: none;
    @media (max-width: 800px) {
        display: inline-block;
    }
`

const Arrow2 = styled.div`
    width: 2px;
    height: 7px;
    background-color: ${props => props.theme === "light" ? themes.light.viewMoreBtnColor : themes.dark.viewMoreBtnColor};
    position: absolute;
    transform: rotate(-45deg);
    top: 7px;
    left: 140px;
    display: none;
    @media (max-width: 800px) {
        display: inline-block;
    }
`

const Arrow3 = styled.div`
    width: 9px;
    height: 2px;
    position: absolute;
    top: 12px;
    left: 140px;
    background-color: ${props => props.theme === "light" ? themes.light.viewMoreBtnHoverColor: themes.dark.viewMoreBtnHoverColor};
    opacity: 0;
    display: none;
    @media (max-width: 800px) {
        display: inline-block;
    }
`

const ButtonHolder = styled.div`
    transition: 0.1s;
    width: 150px;
    position: absolute;
    // background-color: #f00;
    // margin-top: 60px;
    &:hover {
        ${ViewMoreButton} {
            color: ${props => props.theme === "light" ? themes.light.viewMoreBtnHoverColor: themes.dark.viewMoreBtnHoverColor};
          }
          ${Arrow1} {
            transition: 0.1s ease-in-out;
            background-color: ${props => props.theme === "light" ? themes.light.viewMoreBtnHoverColor: themes.dark.viewMoreBtnHoverColor};
            left: 147px;
          }
          ${Arrow2} {
            transition: 0.1s ease-in-out;
            background-color: ${props => props.theme === "light" ? themes.light.viewMoreBtnHoverColor: themes.dark.viewMoreBtnHoverColor};
            left: 147px;
          }
        ${Arrow3} {
            transition: 0.1s ease-in;
            opacity: 1;
        }
    }
`

const PlaceholderContainer = styled.div`
    position: absolute;
    z-index: 9;
    top: 92px;
    right: 232px;
    text-align: center;
`

const Placeholder1 = styled.p`
    font-size: 3.4rem;
    opacity: 0.9;
`

const Placeholder2 = styled.p`
    font-size: 0.8em;
    font-weight: 600;
    color: ${props => props.theme === "light" ? themes.light.constructionTextColor: themes.dark.constructionTextColor};
`

const ToolsContainer = styled.div`
    position: absolute;
    width: auto;
    top: 84%;
    left: 62%;
    display: flex;
    @media (max-width: 1180px) {
        top: 90%;
    }
    @media (max-width: 960px) {
        position: relative;
        top: 0;
        left: 0;
        margin-left: 50%;
        transform:translateX(-50%);
        justify-content: center;
        align-items: center;
        top: -24%;
    }
    @media (max-width: 800px) {
        top: -16%;
    }
    @media (max-width: 520px) {
        top: -10%;
    }
`

const ToolText = styled.a`
    margin-right: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.theme === "light" ? themes.light.toolsColor : themes.dark.toolsColor};
    transition: 0.2s;
    text-decoration: none;
    &:hover {
        color:  ${props => props.theme === "light" ? themes.light.projectIconHoverColor: themes.dark.projectIconHoverColor};
    }
`

export default function ProjectSection ({theme, Color1, Color2, ProjectType, ProjectTitle, ProjectDesc, ProjectAcc, ProjectTools, ProjectDisplay,  ProjectDisplayDark, ProjectGit, ProjectLink}) {

    // const sectionRef = useRef(null)

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
    //     })
    // }

    // intersection && intersection.intersectionRatio < 1 ?
    // fadeOut(".fadeInProject")
    // :  
    // fadeIn(".fadeInProject")
    
    return (
        <Container theme={theme}>
            <ContentContainer >
            <TextContainer>
            <ProjectIdDiv Color1={Color1} Color2={Color2}></ProjectIdDiv>
            <ProjectId className="fadeInProject" Color1={Color1} Color2={Color2}>{ProjectType}</ProjectId>
            <ProjectHeader className="fadeInProject">{ProjectTitle}</ProjectHeader>
            <ProjectText className="fadeInProject" theme={theme}>{ProjectDesc}</ProjectText>
            {ProjectAcc !== "" ? <ProjectAccolades theme={theme}><i>{ProjectAcc}</i></ProjectAccolades> : <></>}
            {ProjectGit !== "" ? <GitHubIconHolder><GitBtn theme={theme} target="_blank" href={ProjectGit} ><i class="fab fa-github-alt"></i></GitBtn></GitHubIconHolder> : <></> }
            <LinkIconHolder><LinkBtn theme={theme} target="_blank" href={ProjectLink} ><i class="fas fa-external-link-alt"></i></LinkBtn></LinkIconHolder>
            <ButtonHolder className="fadeInProject" theme={theme}>
                <ViewMoreButton theme={theme} target="_blank" href={ProjectLink} >View More Details </ViewMoreButton>
                <Arrow1 theme={theme}/>
                <Arrow2 theme={theme}/>
                <Arrow3 theme={theme}/>
            </ButtonHolder>
            </TextContainer>
            <PhoneContainer>
                    <PhoneImg src={theme === "light" ? ProjectDisplay : ProjectDisplayDark }/>
                    {/* <PlaceholderContainer>
                        <Placeholder1>🚧</Placeholder1>
                        <Placeholder2 theme={theme}>Under Consturction</Placeholder2>
                    </PlaceholderContainer> */}

                    <ToolsContainer>
                        {ProjectTools !== null ? 
                            ProjectTools.map((Tool) => 
                                <ToolText target="_blank" href={Tool.link} theme={theme}>{Tool.label}</ToolText>
                            ) 
                        : <></>
                        }
                    </ToolsContainer>
                </PhoneContainer>
            </ContentContainer>
        </Container>
    )
}

 //   ${Arrow3} {
        //     transition: 0.1s ease-in;
        //     opacity: 1;
        //   }