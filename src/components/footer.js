import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Grid from './grid'
import Flex from './Flex'
import Box from './box'
import Logo from './logo'
import { colors } from '../theme'
import TwitterIcon from 'emotion-icons/fa-brands/Twitter'
import YoutubeIcon from 'emotion-icons/fa-brands/Youtube'
import GithubIcon from 'emotion-icons/fa-brands/Github'

const currentYear = new Date().getFullYear()

const Ellipse = styled(Box)`
  display: inline-block;
  position: absolute;
  bottom: -50vw;
  right: -30px;
  width: 40vw;
  height: 10vw;
  background: #122327;
  border-radius: 100% 0 0 0;
`

const LogoStyle = css`
  transform: rotate(4deg);
`

const Copyrights = ({ className }) => (
  <Flex flexDirection="column" alignItems="flex-start" className={className}>
    <Logo css={LogoStyle} mb="3rem" />
    <Box className="icons" mb="3rem">
      <TwitterIcon size="3rem" />
      <YoutubeIcon size="3rem" />
      <GithubIcon size="3rem" />
    </Box>
    <Box color="brightTurquoise" opacity="0.6">
      כל הזכיות שמורות להרפתקה בעברית © {currentYear}
    </Box>
  </Flex>
)

const StyledFooter = styled(Grid)`
  grid-area: footer;
  grid-template-columns: repeat(3, minmax(14rem, 1fr));
  grid-template-areas: 'copyrights nav join-us';
  .copyrights {
    grid-area: copyrights;
    .icons {
      display: flex;
      svg {
        margin-left: 2rem;
      }
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter as="footer">
      {/* <SvgRectangle color="red" className="rectangle" /> */}
      <Copyrights className="copyrights" />
    </StyledFooter>
  )
}

export default Footer
