import React from 'react'
import styled from 'styled-components'
import dateFormat from 'dateformat'
import Vuln from './Vuln';
export default function Body() {
    const now = new Date();
  return (
    <Div>

        <h2>Trellix Remediation Statement {dateFormat(now, "dyyyymm")}</h2>
        <Vuln />
    </Div>
  )
}

const Div = styled.div`
margin: 10px;
width: 100%;
height: 100vh;



background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
h2 {
    margin: auto;
    background-color: white;
    

}
`
