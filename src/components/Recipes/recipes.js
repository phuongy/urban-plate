import React from 'react'
import styled from 'react-emotion'

import { Teaser } from '../Teaser'

export const Recipes = ({ recipes }) => (
  <Wrapper>
    {recipes.map(recipe => (
      <Teaser key={recipe.id} {...recipe} />
    ))}
  </Wrapper>
)

const Wrapper = styled.div``