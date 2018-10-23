import React from 'react'
import styled from 'react-emotion'

import { Link } from 'gatsby'
import LogoWhite from '../../images/logo_urbanplate--white.svg'
import InstagramIcon from '../../images/icon_instagram--white.svg'

export const Footer = () => (
  <FooterWrapper>
    <CopyWrapper>
      <Link to="/">
        <img src={LogoWhite} alt="" style={{ width: '100px' }} />
      </Link>
      <p>
        Urban Plate is a side project of <a href="https://twitter.com/CoreyGinnivan" target="_blank" rel="noreferrer noopener">Corey Ginnivan</a>.
      </p>
    </CopyWrapper>
    <LinksWrapper>
      <LinksLeft>
        <Link to='/about'>About Urban Plate</Link>
        <Link to='/legal'>Terms & Legal</Link>
        <Link to='mailto:corey@ginnivan.net?subject=Hi Corey 👋'>Contact Us</Link>
      </LinksLeft>
      <LinksRight>
        <Link to='http://instagram.com/urbanplateco' target="_blank" rel="noreferrer noopener">
          Instagram <img src={InstagramIcon} alt="" />
        </Link>
      </LinksRight>
    </LinksWrapper>
  </FooterWrapper>
)


const FooterWrapper = styled.div`
  background-color: #000000;
  color: #FFFFFF;
  width: 100%;
  padding: 20px 30px;

  a {
    font-weight: 600;
    color: #FFFFFF;
  }
`

const CopyWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px auto 60px auto;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 0 40px;
    align-items: center;
  }

  @media only screen and (max-width: 599px) {
    margin: 0 auto;
  }

  p {
    width: 740px;
    margin-left: 30px;

    @media only screen and (max-width: 1024px) {
      width: calc(90vw);
      margin: 20px 0 0 0;
    }
  }

  a {
    color: #FFFFFF;

    &:hover {
      opacity: 0.5;
    }
  }
`

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  z-index: 100;
  flex-wrap: wrap;

  @media only screen and (max-width: 599px) {
    flex-direction: column
  }
`

const LinksLeft = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;

  @media only screen and (max-width: 599px) {
    flex-wrap: wrap;
  }

  a {
    padding-left: 20px;
    display: flex;
    white-space: nowrap;
    align-items: center;
    text-decoration: none;

    @media only screen and (max-width: 599px) {
      flex: 1 0 50%;
      padding-left: 0;
      margin-top: 10px;
      justify-content: center;
    }

    &:first-child {
      padding-left: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`

const LinksRight = styled.div`
  margin-left: auto;

  @media only screen and (max-width: 599px) {
    margin-left: 0
  }

  a {
    display: flex;
  }

  img {
    margin-left: 10px;
  }
`