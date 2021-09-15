import React, { useState, useEffect, useRef } from "react"
import { ThemeProvider } from "styled-components"
import gsap from "gsap"
import { useIntersection } from "react-use"

import LandingSection from"./components/LandingSection"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection"
import FooterSection from "./components/FooterSection"
import styled from "styled-components"
import BarLoader from "react-spinners/BarLoader";
import themes from "./themes"

// const Content = styled.div`
//   font-size: 4rem;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   // background: #F00;
//   width: 70px;
// `

const LoaderDiv = styled.div`
  position absolute;
  justify-content: center; 
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #F6F9FC;
  transition: 0.2s ease-in-out;
  z-index: 1;
`

const Hi = styled.h1`
  z-index: 2;
`

const AppDiv = styled.div`
  background-color: ${props => props.theme === "light" ? themes.light.primaryBackgroundColor : themes.dark.primaryBackgroundColor};
`

function App() {

  const [loading, setLoading] = useState(false) //true
  const [theme, setTheme] = useState("light")

  // useEffect(() => {
  //   // setLoading(true)
  //   setTheme("dark")
  //   setTimeout(() => {
  //     setTheme("light")
  //   }, 200)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 400)
  // }, [])

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
      })
  }

  intersection && intersection.intersectionRatio < 1 ?
  fadeOut(".fadeIn")
  :  
  fadeIn(".fadeIn")

  // const BlogRef = useRef(null);
  // const WebpointRef = useRef(null);

  return (
          <AppDiv theme={theme}>
            { loading ? 
              <LoaderDiv>
                  <BarLoader 
                    color={"#FF7474"} 
                    loading={loading} 
                    size={30} /> 
                    <Hi>Hi</Hi>
              </LoaderDiv>
              : <></>}
            <LandingSection theme={theme} setTheme={setTheme}/>
            <AboutSection theme={theme} />
            <ProjectSection
              // ref = {BlogRef}
              theme={theme} 
              Color1="#10e013" 
              Color2="#5dff38" 
              ProjectType="Personal Project" 
              ProjectTitle="The Juicer Blog"  
              ProjectDesc="
              A web app for ___. Designed and Implemented the Frontend using Figma and React." 
              ProjectDisplay={<></>} 
              ProjectGit="https://github.com/adit-bala/juicer-blog-1.0"
              ProjectLink=""    
              />
            <ProjectSection
              // ref = {WebpointRef}
              theme={theme} 
              Color1="#396BFF" 
              Color2="#34BDFF" 
              ProjectType="Volunteer Organization" 
              ProjectTitle="WebPoint"  
              // ProjectDesc="Webpoint is a volunteer organization that delivers local 
              // businesses professional websites and provides students practical experience 
              // in web development. Our team is comprised of over 14 voluenteers, all 
              // of which are high school students." 
              ProjectDesc="Webpoint is a volunteer organization that delivers local 
              businesses professional websites and provides students practical experience 
              in web development." 
              ProjectDisplay={<></>} 
              ProjectGit="https://github.com/webpointco"
              ProjectLink="https://webpoint.dev/index.html"
              />
            {/* <ProjectSection /> */}
            <FooterSection theme={theme} />
          </AppDiv>
  );
}

export default App;
