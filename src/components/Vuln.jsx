import React from 'react'
import styled from 'styled-components'
export default function Vuln() {
  return (
    <Div>

    <div className='solid_bar'/>

    <div className='vuln_info'>

    <h1>Vulnerability Info</h1>
    <ul>
        <li> CVE: </li>
        <li> CVSS v3 Score: </li>
        <li> Severity Categorization: </li>
        <li> Vuln Type: </li>
    </ul>
    </div>

    <div className='vuln_summary'>
        <h1>Vulnerability Summary</h1>
        <p>lorem ipsum</p>

    </div>

    <div className='vuln_summary'>
        <h1>Remediation Summary</h1>
        <p>lorem ipsum</p>

    </div>
    
    
    </Div>
  )
}

const Div = styled.div`
display: flex;
flex-direction: column;
border-top: 3px solid black;
width: 100%;
align-items: center;
${'' /* .solid_bar {
    height: 2px;
    width: 750px;
    background-color: black;
} */}
`
