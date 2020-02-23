import React from 'react'
import Grid from '../components/grid'
import Box from '../components/box'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { colors } from '../theme';


const GameDetail = Box.withComponent('span');

const GameDetailRow = styled(({ title, description, ...rest }) => {
  return (
    <Grid as='li' {...rest} gridTemplateColumns='2fr 3fr' gridColumnGap="2rem">
      <GameDetail>{description}</GameDetail>
      <GameDetail>{title}</GameDetail>
    </Grid>
  )
})`
  ${GameDetail} {
    font-family: "Nunito";
    text-align: end;
  }
`;

const GameDetailStyle = css`
  ${GameDetailRow}:nth-child(2n) {
    clip-path: polygon(0 0, 100% 0%, 98% 100%, 0% 100%);
    background-color: ${colors.whitefade20};
  }
`;

const GameDetails = styled((props) => {
  return (
    <Box as='ul' {...props} color='white' >
      <GameDetailRow title='Opertion System' description='Windows' />
      <GameDetailRow title='Opertion System' description='Windows' />
      <GameDetailRow title='Opertion System' description='Windows' />
      <GameDetailRow title='Opertion System' description='Windows' />
      <GameDetailRow title='Opertion System' description='Windows' />
      <GameDetailRow title='Opertion System' description='Windows' />
    </Box>)
})(GameDetailStyle)

export default GameDetails;