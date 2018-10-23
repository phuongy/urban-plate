import React from 'react'
import styled from 'react-emotion'
import { Link } from "gatsby"

export const Teaser = ({
  title,
  subtext,
  slug,
  accent,
  accentAlt,
  image
}) => (
    <TeaserWrapper color={accent} to={`/recipe/${slug}`}>
      <TeaserTitle>{title}</TeaserTitle>
      <TeaserSubtext color={accentAlt}>{subtext}</TeaserSubtext>
      <TeaserImage src={image.fixed.src} alt="" />
    </TeaserWrapper>
  )

const TeaserWrapper = styled(Link)`
  background: ${p => p.color};
  margin-bottom: 10px;
  text-decoration: none;
  color: #1E1E1E;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px 20px 20px;
  position: relative; 

  margin: 0 5px;
  flex: 1 1 200px;
  cursor: pointer;
  transform: scale(1.0);
  transition: transform 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(0.96);
    transition: transform 0.2s ease;
  }

  &:first-of-type {
    grid-column-start: span 2;
    grid-row-start: span 2;
    padding: 80px;

    @media only screen and (max-width : 1024px) {
      grid-column-start: auto;
      grid-row-start: auto;
      padding: 40px 20px 20px 20px;
    }
  }
`

const TeaserTitle = styled.h3`
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 2.8px;
  line-height: 20px;
  text-transform: uppercase;
  margin: 0;
  padding: 0 22px;

  ${TeaserWrapper}:first-of-type & {
    font-size: 32px;
    letter-spacing: 6px;
    line-height: 32px;
    padding: 0;

    @media only screen and (max-width : 1024px) {
      font-size: 16px;
      letter-spacing: 2px;
      line-height: 20px;
    }
  }
`

const TeaserSubtext = styled.p`
  color: ${p => p.color};
  margin: 5px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  ${TeaserWrapper}:first-of-type {
    font-size: 26px;
    margin: 10px 0;
    line-height: 32px;

    @media only screen and (max-width : 1024px) {
      font-size: 16px;
      margin: 5px 30px;
      line-height: 20px;
    }
  }
`

const TeaserImage = styled.img`
  width: 100%;
  margin-top: auto;
`