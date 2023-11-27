import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Outlet } from 'react-router'
import Navbar from './components/NavBar'


function App() {


  return (
    <Container>
      <Navbar/>
      <Outlet/>
      <Row style={{textAlign:"center"}}>
        
      </Row>
      

    </Container>
  )
}

export default App
