
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import styled from 'styled-components';

function App() {
  return (
    <>
    <Div>
      
      <Header/>
      <Body />
      <Footer /> 
    </Div>
   
    </>

  
  );
}

const Div = styled.div`
background-color: white;
display: flex;
flex-direction: column;  
margin: auto;
width:100vw;
height:100vh;`



export default App;





