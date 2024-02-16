import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurentSlice';

function Header() {
  const dispatch=useDispatch();
  return (
    <>
    <Link to={'/'}style={{textDecoration:"none"}}>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <img height={"50px"} width={"100px"} src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg" alt="" />     
              <Navbar.Brand href="#home">Palaaram</Navbar.Brand>
          <input
          onChange={(e)=>dispatch(search(e.target.value))}
          type="text" className='form-control w-25' placeholder='search by neighbourhood'/>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      </Link>
    </>
  )
}

export default Header
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
         