import styled from 'styled-components';
import {
  Box,
  Button as ChakraButton,
  Input as ChakraInput,
} from '@chakra-ui/react';
import colors from '../../theme/colors';

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
`;

export const StyledInput = styled(ChakraInput)`
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${colors.primary[300]};
  &:focus {
    border-color: ${colors.primary[500]};
  }
`;

export const StyledButton = styled(ChakraButton)`
  font-size: 1.1rem;
  padding: 10px;
  background-color: ${colors.primary[500]};
  &:hover {
    background-color: ${colors.primary[600]};
  }
`;
