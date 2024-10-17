import styled from 'styled-components';
import { Box, Heading } from '@chakra-ui/react';
import colors from '../src/theme/colors';

export const Container = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 3rem;
  border-radius: 8px;
  min-height: 100vh;
`;

export const StyledHeading = styled(Heading)`
  font-size: 1.5rem;
  color: ${colors.primary[500]};
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
  text-align: center;
`;

export const ContentFormAddPhrase = styled(Box)`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const StyledSearchBarContainer = styled(Box)`
  max-width: 700px;
  display: flex;
  justify-content: center;
  border-radius: 8px;
`;
