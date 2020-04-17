import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box } from '../components/base-components';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '../theme';
import { kiloBytesToSize } from '../utils';

const { string, number } = PropTypes;
const GameDetail = Box.withComponent('span');

const GameDetailRow = styled(({ title, description, ...rest }) => {
  return (
    <Grid as="li" {...rest} gridTemplateColumns="2fr 3fr" gridColumnGap="2rem">
      <GameDetail>{description}</GameDetail>
      <GameDetail>{title}</GameDetail>
    </Grid>
  );
})`
  ${GameDetail} {
    font-family: 'Nunito';
    text-align: end;
  }
`;

const GameDetailStyle = css`
  // prettier-ignore
  ${GameDetailRow}:nth-of-type(2n) {
    clip-path: polygon(0 0, 100% 0%, 98% 100%, 0% 100%);
    background-color: ${colors.whitefade20};
  }
`;

const GameDetails = styled((props) => {
  const {
    game: { worksOn, releaseDate, sizeInKiloBytes, gameDeveloper },
  } = props;

  return (
    <Box {...props} as="section">
      <Box fontSize="3rem"> עוד קצת פרטים</Box>
      <Box as="ul" color="white">
        <GameDetailRow
          title="Opertion System"
          description={worksOn.join(',')}
        />
        <GameDetailRow title="ReleaseDate" description={releaseDate} />
        <GameDetailRow
          title="Size"
          description={kiloBytesToSize(sizeInKiloBytes)}
        />
        <GameDetailRow title="Company" description={gameDeveloper.name} />
      </Box>
    </Box>
  );
})(GameDetailStyle);

GameDetails.propTypes = {
  game: PropTypes.shape({
    worksOn: PropTypes.arrayOf(string).isRequired,
    releaseDate: string.isRequired,
    sizeInKiloBytes: number.isRequired,
    gameDeveloper: PropTypes.shape({ name: string }).isRequired,
  }).isRequired,
};
export default GameDetails;
