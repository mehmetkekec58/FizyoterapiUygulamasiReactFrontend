import React, { useState } from 'react'
import {Navbar,Nav, Container } from 'react-bootstrap/';
import { useNavigate } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function Navi() {
 
    const navigate =  useNavigate()
  const [isAuth, setIsAuth] = useState(girisYapilmisMi())
  function handleSignOut() {
   localStorage.clear("token");
   setIsAuth(girisYapilmisMi());
   navigate('/')
  }
  function handleSignIn() {
    localStorage.setItem("token","elfdlsdşflşdlfş");
   setIsAuth(girisYapilmisMi());
  }
  function girisYapilmisMi() {
    if (localStorage.getItem("token")) 
      return true;
      else
    return false;
  }
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">Fizyoterapi App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        </Nav>
        {/* <Nav.Link href="/">Anasayfa</Nav.Link> */}
        {
        isAuth? <SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>
          
       }
       
        
 
      
      
      { /*<Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Arama"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Ara</Button>
  </Form>*/}
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
