import React from 'react'
import styled from '@emotion/styled'
import { fontSize, color, space } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

const ButtonContainer = styled.div`
  display: grid;
  grid-template-rows: 45fr 5fr;
  ${color} 
  ${fontSize} ${space};
`

const ButtonContent = styled.div`
  border: 0;
  outline: none;
  border-radius: 0;
  grid-row: 1 / 2;
  align-self: center;
  font-size: 3rem;
  ${color} ${fontSize} ${space};
`

const ButtonBorder = styled.div`
  grid-row: 2/ 3;
  background-color: ${themeGet('colors.blackfade20')};
  z-index: 30;
  width: 100%;
`

const Button = props => {
  return (
    <ButtonContainer {...props}>
      <ButtonContent {...props} px={'3.4rem'} />
      <ButtonBorder />
    </ButtonContainer>
  )
}

export default Button
