import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";



const Nav = styled.nav`
  display: flex;
  padding: 20px;
  color: black;
  text-decoration:none;
  justify-content:center; 
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  color: black;
  text-decoration:none;
`;



const Navbar = () => {
  return (

      <div>
        <Nav>

      <NavLinks>
        <StyledLink  to="/gallery">Home</StyledLink>
        <StyledLink  to="/contact" >Contact</StyledLink>
        <StyledLink  to="/about" >About</StyledLink>
        </NavLinks>
        </Nav>
      </div>
  );
};

export default Navbar;
