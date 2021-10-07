import React from 'react';
// import {GlobalStyle} from './StyledComponents/GlobalStyles';
import {Nav, NavContainer, NavLinks,NavMenu,NavItem, Logo} from './StyledComponents/Navbar.style';
export const Navbar = function () {
  return (
        <Nav>
            <NavContainer>
                <Logo to = "/">
                    Resturant
                </Logo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/">
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about">
                            about
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/contact">
                            contact
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
  )
}


