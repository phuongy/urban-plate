import React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet'
import { PageHead } from '../pages'
import { MainNav } from '../components/Nav'
import { Ingredients } from '../components/Ingredients'
import { Method } from '../components/Method'
import { Footer } from '../components/Footer'

const Recipe = ({ pageContext }) => {
  const {
    title,
    slug,
    accent,
    intro,
    image,
    thumb,
    prepTime,
    serves,
    cookingTime,
    ingredients,
    steps,
    date
  } = pageContext;

  return (
    <>
      <PageHead />
      <Helmet>
        <title>Urban Plate - {title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={intro.intro} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={thumb.fixed.url} />
        <meta property="og:secure_url" content={thumb.fixed.url} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_us" />
        <meta property="og:url" content={`https://urbanplate.co/recipe/${slug}`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@CoreyGinnivan" />
        <meta property="twitter:label1" content="Total Time" />
        <meta property="twitter:data1" content="1.5 hours" />
        <meta property="twitter:label2" content="Serves" />
        <meta property="twitter:data2" content="4 ppl" />
        <meta property="twitter:image" content={thumb.fixed.url} />
        <meta property="article:published_time" content={date} />
      </Helmet>
      <MainNav />
      <Hero accent={accent}>
        <h1>{title}</h1>
        <HeroImage src={image.fixed.src} alt="" />
      </Hero>
      <Intro>{intro.intro}</Intro>
      <Content>
        <Ingredients ingredients={ingredients} />
        <Method
          prepTime={prepTime}
          cookingTime={cookingTime}
          serves={serves}
          steps={steps}
        />
      </Content>
      <Footer />
    </>
  )
}

export default Recipe

const Hero = styled.div`
  background-color: ${p => p.accent};
      width: calc(100vw - 80px);
      max-width: 1360px;
      height: 480px;
      position: relative;
      margin: 0 auto;
    
  @media only screen and (max-width: 599px) {
        width: calc(100vw);
      height: 360px;
    }
  
  h1 {
        text - transform: uppercase;
      position: absolute;
      bottom: -90px;
      left: 40px;
      max-width: 600px;
      color: #1E1E1E;
      text-align: left;
  
    @media only screen and (max-width: 1023px) {
        bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      text-align: center;
      max-width: 100%;
      padding: 0 20px;
      height: 180px;
      display: flex;
    }
  }
`

const HeroImage = styled.img`
  right: -40px;
  bottom: -110px;
  position: absolute;
  width: 660px;

  @media only screen and (max-width: 599px) {
        width: 400px !important
    }
  
  @media only screen and (max-width: 1023px) {
        width: 510px;
      transform: translate(50%, 0);
      right: 50%;
    }
  `

const Intro = styled.h2`
    max-width: 1360px;
    margin: 0 auto;
    padding: 100px 40px 20px 40px;
    color: #66686E;
    font-weight: 400;
  
  @media only screen and (max-width: 599px) {
        padding: 100px 20px 20px 20px;
    }
  `

const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100vw - 80px);
    max-width: 1360px;
    margin: 0 auto;
    padding: 40px 0 140px 0;
  
  @media only screen and (max-width: 1023px) {
        flex - direction: column;
      padding: 0 0 80px 0;
      width: calc(100vw - 80px);
    }
  
  @media only screen and (max-width: 599px) {
        width: calc(100vw - 40px);
    }
  `
