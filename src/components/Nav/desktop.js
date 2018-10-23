import React from 'react'
import styled from 'react-emotion'
import LogoSrc from '../../images/logo_urbanplate.svg'
import InstagramIcon from '../../images/icon_instagram.svg'
import { NavLink, InstagramLink } from './'

export const DesktopNav = ({ isHome }) => (
  <>
    <Wrapper>
      {!isHome && (<Logo>
        <img src={LogoSrc} alt="Urban Plate" />
      </Logo>)}

      <Left>
        {!isHome && (<NavLink to="/">Browse All Recipes</NavLink>)}
      </Left>

      <Right>
        <NavLink to="/the-pantry/">The Pantry</NavLink>
        <NavLink to="/about/">About</NavLink>
        <InstagramLink href="://instagram.com/urbanplateco"
          target="_blank">
          <img src={InstagramIcon} alt="Instagram" />
        </InstagramLink>
      </Right>
    </Wrapper>
  </>
)

const Wrapper = styled.nav`
  width: calc(100vw - 200px);
  max-width: 1360px;
  display: flex;
  margin: 0 auto;
  position: relative;
  height: 70px;
  z-index: 100;

  @media only screen and(max-width: 1023px) {
    width: calc(100vw - 100px);
  }

  @media only screen and(max - width: 599px) {
    width: calc(100vw - 40px);
  }
`

const Logo = styled.div`
  position: absolute;
  top: 10px;
  transform: rotate(0deg);
  transition: transform 0.2s ease;
  cursor: pointer;

  img {
    width: 150px;
  }

  &:hover {
    cursor: pointer;
    transform: rotate(-14deg);
    transform-origin: center;
    transition: transform 0.2s ease;
  }
`

const Left = styled.div`
  align-items: center;
  display: flex;
  margin-left: 170px;
  position: relative;
`

const Right = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  position: relative;

  @media only screen and (max-width: 599px) {
    margin-right: 0;
  }
`
