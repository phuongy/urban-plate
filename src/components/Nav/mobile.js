import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

export const MobileToggle = () => (
  <ToggleWrapper>
    <ToggleButton href="#navbar-toggle">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="sr-only">Toggle Navigation Menu</span>
    </ToggleButton>
  </ToggleWrapper>
)

const ToggleWrapper = styled.div`
  @media only screen and (min-width: 600px) {
    display: none !important
  }
`

const ToggleButton = styled.a``

export const MobileNav = () => (
  <NavWrapper>
    <ul id="navbar-toggle">
      <li><Link to="/">Browse All Recipes</Link></li>
      <li><Link to="#" className="coming-soon">Store (Coming Soon)</Link></li>
      <li><Link to="/the-pantry/">The Pantry</Link></li>
      <li><Link to="/about/">About Urban Plate</Link></li>
      <li><Link to="/legal/">Terms & Legal</Link></li>
      <li><a href="http://instagram.com/urbanplateco">Instagram</a></li>
      <li><a href="mailto:corey@ginnivan.net?subject=Hey Corey 👋">Contact Us</a></li>
    </ul>
  </NavWrapper>
)

const NavWrapper = styled.div`
  background: transparent;
  border: 0;
  cursor: pointer;
  display: none;
`