
import styled from 'styled-components';
import {Link as Links } from 'react-router-dom'


export const NavContainer = styled.div`
  margin: 0px auto;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
`;


export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: black;
  padding: 0px 40px;
`;



export const NavLinks = styled(Links)`
  color: white;
  text-decoration: none;
`;

export const NavItem = styled.li`
  list-style-type: none;
  padding: 20px;
`;
export const NavMenu = styled.ul`
  display:flex
`;
export const Logo = styled(Links)`
  text-decoration: none;
  color: white;
  padding: 20px;

`;