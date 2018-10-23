import React from 'react'
import styled from 'react-emotion'
import LogoSrc from '../../images/logo_urbanplate.svg'

export const Header = ({ isHome, children }) => (
  <>
    <Wrapper>
      {isHome && (
        <Logo>
          <img src={LogoSrc} alt="Urban Plate" />
        </Logo>
      )}
      {children}
    </Wrapper>
  </>
)

const Wrapper = styled.header`
  max-width: 1360px;
  display: flex;
  margin: 50px auto 100px auto;
  padding: 0 50px;
  position: relative;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 0 40px;
    align-items: center;
  }

  @media only screen and (max-width: 599px) {
    margin: 20px auto 50px auto;
  }
`

const Logo = styled.div`
  flex: 0 0 auto;
  
  img {
    position: absolute;
    top: 10px;
    transform: rotate(0deg);
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
      cursor: pointer;
      transform: rotate(-14deg);
      transform-origin: center;
      transition: transform 0.2s ease;
    }
  }
`