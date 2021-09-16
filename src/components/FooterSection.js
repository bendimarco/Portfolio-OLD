import React from 'react'
import styled from "styled-components"
import themes from "../themes"

const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme === "light" ? themes.light.secondaryBackgroundColor : themes.dark.secondaryBackgroundColor};
    font-family: 'Lato', sans-serif;
    padding-top: 20px;
    margin-top: 60px;
`

const ContentContainer = styled.div`
    width: 1100px;
    height: 100px;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    // background: #0f0;
`

const TextContainer = styled.div`
    width: 100%;
    text-align: center;
    // background: #f00;
`

const CopyrightText = styled.h1`
    margin-top: 17px;
    font-weight: 300;
    font-size: 1rem;
    color: ${props => props.theme === "light" ? themes.light.copyrightTextColor : themes.dark.copyrightTextColor};
`

const MadeWithText = styled.h1`
    margin-top: 10px;
    font-weight: 300;
    font-size: 0.9rem;
    color: ${props => props.theme === "light" ? themes.light.madeWithTextColor: themes.dark.madeWithTextColor};
`

const DotLine2 = styled.div`
    position: absolute;
    right: 0;
    width: 1px;
    background-image: ${props => props.theme === "light" ? themes.light.dottedLineColor: themes.dark.dottedLineColor};
    background-position: right;
    background-size: 1px 12px;
    background-repeat: repeat-y;
    height: 100px;
`


// const TrademarkText = styled.h1``

// const MadeWithText = styled.h1``

export default function ProjectSection ({ theme }) {
    return (
        <Container theme={theme}>
            <ContentContainer>
                <DotLine2 theme={theme}/>
                <TextContainer>
                    <CopyrightText theme={theme}>© Copyright 2021 Benjamin DiMarco</CopyrightText>
                    <MadeWithText theme={theme}>Made with️ React and &nbsp;❤️</MadeWithText>
                </TextContainer>
            </ContentContainer>
        </Container>
    )
}