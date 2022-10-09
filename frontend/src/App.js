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

import BlogImg from "../src/images/Projects/blog.svg"
import BlogImgDark from "../src/images/Projects/blog_dark.svg"
import WebPointImg from "../src/images/Projects/webpoint.svg"
import WebPointImgDark from "../src/images/Projects/webpoint_dark.svg"
import Memento from "../src/images/Projects/memento.svg"
import MementoDark from "../src/images/Projects/memento_dark.svg"


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
  overflow-x: hidden;
`

const getTimeTheme = () => {
  var date = new Date();
  var hour = date.getHours();
  console.log(hour)
  if(hour > 6 && hour < 19){
    return "light";
  } else {
    return "dark";
  }
}

function App() {

  const [loading, setLoading] = useState(false) //true
  const [theme, setTheme] = useState(getTimeTheme())

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
  // fadeOut(".fadeIn")
  // :  
  // fadeIn(".fadeIn")

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
              theme={theme} 
              Color1="#B844FF" 
              Color2="#7D16FF" 
              ProjectType="Co-Founder" 
              ProjectTitle="Memento"   
              // ProjectDesc="Webpoint is a volunteer organization that delivers local 
              // businesses professional websites and provides students practical experience 
              // in web development. Our team is comprised of over 14 voluenteers, all 
              // of which are high school students." 
              ProjectDesc="Democratizing NFT art through accessability and affordability. Checkout With credit card, browse our curated collection every week, choose your own price, and support global art projects through our Community Artist Investment Fund." 
              ProjectAcc="UMD Blockchain Accelerator Alumni"
              ProjectTools={[{ label: "React.js", link: "https://reactjs.org/" }, 
                              { label: "Figma", link: "https://www.figma.com/" }, 
                              { label: "Vercel", link: "https://vercel.com/" }, 
                              { label: "Solidity", link: "https://docs.soliditylang.org/en/v0.8.17/"}]}
              ProjectDisplay={Memento} 
              ProjectDisplayDark={MementoDark} 
              ProjectGit=""
              ProjectLink="https://www.mementodigital.io/"
              />
            <ProjectSection
              // ref = {BlogRef}
              theme={theme} 
              Color1="#10e013" 
              Color2="#5dff38" 
              ProjectType="Personal Project" 
              ProjectTitle="The Juicer Blog"  
              ProjectDesc="A web app to capture my many thoughts, and the thoughts of my much more thoughtful friend, Adit." 
              ProjectAcc=""
              ProjectTools={[{ label: "React.js", link: "https://reactjs.org/" }, 
                              { label: "Figma", link: "https://www.figma.com/" }, 
                              { label: "Strapi", link: "https://strapi.io/" }, 
                              { label: "Heroku", link: "https://www.heroku.com/"}]}
              ProjectDisplay={BlogImg}  
              ProjectDisplayDark={BlogImgDark}  
              ProjectGit="https://github.com/adit-bala/juicer-blog-1.0"
              ProjectLink="https://adit-bala.github.io/juicer-blog-frontend/"    
              />
            <ProjectSection
              // ref = {WebpointRef}
              theme={theme} 
              Color1="#396BFF" 
              Color2="#34BDFF" 
              ProjectType="Co-Founder" 
              ProjectTitle="WebPoint"   
              // ProjectDesc="Webpoint is a volunteer organization that delivers local 
              // businesses professional websites and provides students practical experience 
              // in web development. Our team is comprised of over 14 voluenteers, all 
              // of which are high school students." 
              ProjectDesc="Delivering local 
              businesses professional websites and providing students practical experience 
              in web development. Free websites created by high-school student volunteers for our community." 
              ProjectAcc=""
              ProjectTools={[{ label: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" }, 
                              { label: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" }, 
                              { label: "JavaScript", link: "https://www.javascript.com/" }, 
                              { label: "Figma", link: "https://www.figma.com/"}]}
              ProjectDisplay={WebPointImg} 
              ProjectDisplayDark={WebPointImgDark} 
              ProjectGit="https://github.com/webpointco"
              ProjectLink="https://webpoint.dev/index.html"
              />
            {/* <ProjectSection /> */}
            <FooterSection theme={theme} />
          </AppDiv>
  );
}

export default App;
