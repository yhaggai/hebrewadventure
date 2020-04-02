import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Grid, Flex, Box } from './base-components';
import Logo from './logo';
import Icon from './icon';
import FacebookIcon from 'emotion-icons/fa-brands/Facebook';
import YoutubeIcon from 'emotion-icons/fa-brands/Youtube';
import GithubIcon from 'emotion-icons/fa-brands/Github';

const currentYear = new Date().getFullYear();

const LogoStyle = css`
  transform: rotate(4deg);
`;

const Copyrights = ({ className }) => (
  <Flex flexDirection="column" alignItems="flex-start" className={className}>
    <Logo css={LogoStyle} mb="3rem" />
    <Flex className="icons" mb="3rem">
      <Icon>
        <FacebookIcon size="3rem" />
      </Icon>
      <Icon>
        <YoutubeIcon size="3rem" />
      </Icon>
      <Icon>
        <GithubIcon size="3rem" />
      </Icon>
    </Flex>
    <Box color="brightTurquoise" opacity="0.6">
      כל הזכיות שמורות להרפתקה בעברית © {currentYear}
    </Box>
  </Flex>
);

const StyledFooter = styled(Grid)`
  grid-area: footer;
  align-content: end;
  grid-template-columns: repeat(3, minmax(14rem, 1fr));
  grid-template-areas: 'copyrights nav join-us';
  .copyrights {
    grid-area: copyrights;
    .icon {
      margin-left: 2rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter as="footer">
      <Copyrights className="copyrights" />
    </StyledFooter>
  );
};

export default Footer;
