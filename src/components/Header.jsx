import React from 'react'
import styled from 'styled-components'
import trellix from '../image/trellix.webp'
import dateFormat from "dateformat"
export default function Header() {
 

const now = new Date();
  return (

    <NAV className='header'>
       <div className="header_watermark">
            <p>Trellix Remediation Statement</p>
            <p>Date: {dateFormat(now, "mmmm dS, yyyy")}</p>
            {/* <p>Elliott Arnold</p> */}
       </div>
        <img src={trellix} />
    </NAV>
  )
}

const NAV = styled.nav`
display: flex;
justify-content: space-between;
width: 100%;
${'' /* margin: 10px; */}
height: 20vh;
background-color: white;

img {
    margin-right: 50px;
    height: 100px;
}

.header_watermark {

   
    margin-top: 80px;
    margin-left: 15%;
    margin-top: 6%;
    text-align: left;
    background-color: white;
    display: block;
    flex-direction: column;

}
.header_watermark > p {
height: .6px;
  background-color: transparent;
  color: grey;

}

img {
        opacity: 0.5;
        }
 
`