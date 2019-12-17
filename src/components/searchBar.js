import React from 'react';
import styled from '@emotion/styled';
import { space, fontSize, theme } from 'styled-system';
import { themeGet } from '@styled-system/theme-get'
import { SearchAlt } from 'emotion-icons/boxicons-regular'


const StyledSearchBar = styled.div`
  background-color: ${themeGet('colors.gray.1')};
  ${space}
  ${fontSize};
`;

const Input = styled.input`
  font-family: 'stranger', sans-serif;
  border: none;    
  color: ${themeGet('colors.gray.0')};
  background-color: ${themeGet('colors.gray.1')};
`;

const Button = styled.button`
  background-color: ${themeGet('colors.blue.0')};
  color: transparent;
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <SearchAlt />
      <Input type="text" placeholder="שם המשחק..." />
      <Button type="submit"></Button>
    </StyledSearchBar>
  );
};

export default SearchBar;