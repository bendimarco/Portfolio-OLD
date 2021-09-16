import React from 'react'
import styled, { keyframes } from "styled-components"
import themes from "../themes"
// import keyframes from "styled-components"

const AnimateWheel = (theme) => keyframes`
    from {
        margin-top: 15px;
        opacity: 0.7;
        border: 1px solid ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
        background-color: ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
      }

      60% {
        margin-top: 15px;
        opacity: 0.7;
        background-color: ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
        border: 1px solid ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
      }

      62% {
        background-color: ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
        border: 1px solid ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
      }
      
      66% {
        margin-top: 15px;
        opacity: 0.9;
        background-color: ${theme === "light" ? themes.light.scrollDim2 : themes.dark.scrollDim2};
        border: 1px solid ${theme === "light" ? themes.light.scrollDim3 : themes.dark.scrollDim3};
      }

      68% {
        margin-top: 4px;
        opacity: 1;
      }

      70% {
        margin-top: 17px;
        opacity: 0.9;
      }

      72% {
        margin-top: 13px;
        opacity: 0.9;
      }

      74% {
        margin-top: 15px;
        opacity: 0.9;
        background-color: ${theme === "light" ? themes.light.scrollDim2 : themes.dark.scrollDim2};
        border: 1px solid ${theme === "light" ? themes.light.scrollDim3 : themes.dark.scrollDim3};
      }

      76% {
        margin-top: 15px;
        opacity: 0.7;
      }

      78% {
        margin-top: 15px;
        background-color: ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
        border: 1px solid ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
      }
    
      to {
        margin-top: 15px;
        background-color: ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
        border: 1px solid ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
      }
}
`

const AnimateBorder = (theme) => keyframes`
    from {
        border: 1px solid ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
      }

      60% {
        border: 1px solid ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
      }
      
      64% {
        border: 1px solid ${theme === "light" ? themes.light.scrollDim2 : themes.dark.scrollDim2};
      }

      74% {
        border: 1px solid ${theme === "light" ? themes.light.scrollDim2 : themes.dark.scrollDim2};
      }

      78% {
        border: 1px solid ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
      }
    
      to {
        border: 1px solid ${theme === "light" ? themes.light.scrollDim1 : themes.dark.scrollDim1};
      }
}
`

const Border = styled.div`
    height: 30px;
    width: 16px;
    color: ${(props => props.theme === "light" ? themes.light.scrollColor1 : themes.dark.scrollColor1)};
    border-radius: 16px;
    opacity: 1;
    animation: ${AnimateBorder(props => props.theme)} 12.8s ease-in-out infinite;
`

const Wheel = styled.div`
    color: ${(props => props.theme === "light" ? themes.light.scrollColor2  : themes.dark.scrollColor2 )};
    border-radius: 16px;
    height: 8px;
    width: 3px;
    margin-top: 15px;
    margin-left: 5px;
    background-color: ${(props => props.theme === "light" ? themes.light.scrollColor2 : themes.dark.scrollColor2 )};
    animation: ${AnimateWheel(props => props.theme)} 12.8s ease-in-out infinite;
    opacity: 0.7;
`

export default function Scroll ({ theme }) {

    return (
        <Border theme={theme}>
            <Wheel theme={theme}></Wheel>
        </Border>
    )
}