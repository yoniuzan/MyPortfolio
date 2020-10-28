import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNavBar = () => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Logo src="icons/logo.svg" alt="My portfolios logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavBar;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 3rem;
  animation: ${spin} 2s linear infinite;
`;

/*
.logo {
  width: 25%;
}

.nav-theme {
  background-color: #101018f8;
  font-size: 20px;
}

.animate-navbar {
  box-shadow: 1px 1px 1px #222;
  animation: moveDown 0.5s ease-in-out;
}

@keyframes moveDown {
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
}

*/
