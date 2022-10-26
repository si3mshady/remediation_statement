import React from 'react'
import styled from 'styled-components'
import trellix from '../image/trellix.webp'

export default function Footer() {
  return (
    <Div>
    <img src={trellix}/>
    </Div>
  )
}


const Div = styled.footer`
margin: 10px;
height: 20vh;
width: 100%;
background-color: white;

display: flex;
img {
        opacity: 0.5;
        height: 100px;
        
        }
`