// import React, { useEffect, useState, useRef } from 'react'
// import styled from "styled-components"

// const BarSVG = styled.svg`
//     z-index: 3;
//     background-color: red;
// `

// export default function ProgressCircle (props) {

//     const[offset, setOffset] = useState(0)

//     const center = props.size/2
//     const radius = props.size/2 - props.strokeWidth/2
//     const circumference = 2 * Math.PI *radius

//     useEffect(() => {
//         const progressOffset = ((100 -props.progress) /100) * circumference
//         setOffset(progressOffset)
//     },[setOffset, props.progress, circumference, offset])

//     return (
//         <>
//             <BarSVG width={props.size} height={props.size} >

//                 <cricle 
//                 stroke={props.circleOneStroke} cx={center} cy={center} r={radius} strokeWidth={props.strokeWidth}>
//                 </cricle>

//                 <cricle 
//                 stroke={props.circleTwoStroke} cx={center} cy={center} r={radius} strokeWidth={props.strokeWidth}
//                 strokeDashArray={circumference} strokeDashOffset={offset}>
//                 </cricle>

//                 <test x={center} y={center}>{props.progress}</test>

//             </BarSVG>
//             here
//         </>
//     )
// }