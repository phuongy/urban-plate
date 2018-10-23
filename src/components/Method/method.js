import React from 'react'
import styled from 'react-emotion'

export const Method = ({ prepTime, cookingTime, serves, steps }) => (
  <Wrapper>
    <Header>
      <h2>Method</h2>
      <Meta>
        {prepTime && <MetaItem label="Prep Time">{prepTime}</MetaItem>}
        {cookingTime && <MetaItem label="Total Time">{cookingTime}</MetaItem>}
        {serves && <MetaItem label="Serves">{serves}</MetaItem>}
      </Meta>
    </Header>
    <Content>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            <StepNumber>Step {index + 1}</StepNumber> {step.content}
          </li>
        ))}
      </ul>
    </Content>
  </Wrapper>
)


const Wrapper = styled.div`
  width: 100%;
  padding-right: 40px;

  @media only screen and (max-width: 1023px) {
    padding-right: 0;
    margin-top: 20px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin-bottom: 40px;

    @media only screen and (max-width: 1023px) {
      margin-bottom: 10px;
    }
  }
`

const Content = styled.div`

  ul {
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    list-style: none;
    padding: 0;
  }

  li {
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    color: #66686E;
    line-height: 22px;
  }
`

const StepNumber = styled.span`
  color: #000000;
  padding-bottom: 8px;
  font-weight: 600;
`

const Meta = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const MetaItem = styled.span`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  color: #000000;
  text-align: right;
  margin-left: 20px;

  &::after {
    content: '';
    content: ${p => `"${p.label}"`};
    font-weight: 800;
    border-top: 2px solid #000000;
    text-transform: uppercase;
    padding-top: 3px;
    margin-top: 3px;
    font-size: 11px;
    text-align: right;
  }
`