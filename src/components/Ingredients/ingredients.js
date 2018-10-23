import React from 'react'
import styled from 'react-emotion'
import ClipboardIcon from '../../images/icons/clipboard.svg'

export const Ingredients = ({ ingredients }) => (
  <Wrapper>
    <Title>Ingredients</Title>
    <Table id="ingredient__list">
      {ingredients.map((ingredient, index) => (
        <tr key={index}>
          <td>{ingredient.quantity}</td>
          <td>{ingredient.name}</td>
        </tr>
      ))}
    </Table>
    <Clipboard data-clipboard-action="copy" data-clipboard-target="#ingredient__list">
      <img src={ClipboardIcon} alt="" /> Copy list to clipboard
    </Clipboard>
    <Footer>
      <p>
        Follow <a href="https://www.instagram.com/urbanplateco/" target="_blank" rel="noreferrer noopener">@UrbanPlateCo</a> on Instagram to keep up to date and stalk more recipes like this one.
      </p>
    </Footer>
  </Wrapper>
)

const Wrapper = styled.div`
  max-width: 440px;
  min-width: 420px;
  margin-right: 80px;
  margin-left: 40px;
  position: sticky;
  top: 0;
  align-self: flex-start;

  @media only screen and (max-width: 1023px) {
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
    min-width: auto;
    position: initial;
    align-self: auto;
  }
`

const Title = styled.h2`
  margin-bottom: 40px;

  @media only screen and (max-width: 1023px) {
      margin-bottom: 10px;
  }
`

const Table = styled.table`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  list-style: none;
  background-color: #F1F1F1;
  padding: 16px 16px 0 16px;
  width: 100%;

  tr {
    height: 40px;
    vertical-align: top;
  }

  td:first-child {
    text-align: right;
    font-weight: 600;
    text-transform: capitalize;
    white-space: nowrap;
  }

  td:last-child {
    padding-left: 20px;
  }
`

const Clipboard = styled.button`
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  line-height: 22px;
  background-color: #EBEBEB;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 0;
  outline: 0;
  width: 100%;

  &:hover {
    background-color: #D6D6D6;
    cursor: pointer;
  }

  &:active {
    outline: none;
  }

  img {
    margin-right: 10px;
  }
`

const Footer = styled.div`
  margin-top: 30px;
  color: #1e1e1e;
  letter-spacing: .3px;
`