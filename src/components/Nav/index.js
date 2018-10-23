import React from 'react'
import styled from 'react-emotion'
import { DesktopNav } from './desktop'
import { MobileToggle, MobileNav } from './mobile'
import { Link } from 'gatsby'

export const MainNav = ({ isHome }) => (
  <>
    <DesktopNav isHome={isHome} />
    <MobileToggle />
    <MobileNav isHome={isHome} />
  </>
)

export const NavLink = styled(Link)`
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    margin-left: 20px;
    width: calc(100% - 20px);
    border-bottom: 2px solid;
    margin-top: 10px;
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0,1);
  }

  &:first-child {
    padding-left: 0;
  }

  &:first-child:hover:after {
    margin-left: 0;
    width: 100%;
  }

  &:hover:after {
    opacity: 1;
    transform: scale(1);
  }
`

export const InstagramLink = styled.a`
  transform: scale(1.0);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(0.9);
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  &:hover:after {
    display: none !important
  }
`

// [aria - current]: not([aria - current="false"]) {
//     &: after {
//     opacity: 1;
//     transform: scale(1);
//   }
// }
// `
