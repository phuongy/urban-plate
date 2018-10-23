import React from 'react'
import styled from 'react-emotion'
import { PageHead } from '../pages'
import { Header } from '../components/Header'
import { MainNav } from '../components/Nav'
import { Recipes } from '../components/Recipes'
import { Footer } from '../components/Footer'
import LogoSrc from '../images/logo_urbanplate.svg'

export const Home = ({
  recipes
}) => (
    <>
      <PageHead />
      <MainNav isHome />
      <Header>
        <Logo src={LogoSrc} className="logo" />
        <Hero>
          Modern, delicious and creative vego food.<br />This isn’t your usual vegetarian site.
        </Hero>
      </Header>
      <Main>
        <Recipes recipes={recipes} />
      </Main>
      <Footer />
    </>
  )

// styles

const Logo = styled.img`
  width: 150px;
`

const Hero = styled.h2`
  width: calc(56vw);
  margin-left: 30px;

  @media only screen and(max-width: 1024px) {
    width: calc(90vw);
    margin: 20px 0 0 0;
  }
`

const Main = styled.main`
  padding: 0 20px;
  display: grid;
  grid-gap: 10px;
`