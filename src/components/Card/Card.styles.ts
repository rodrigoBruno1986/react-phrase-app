import styled from 'styled-components';
import {
  Card as ChakraCard,
  CardHeader as ChakraCardHeader,
  CardBody as ChakraCardBody,
  Button,
  Flex,
} from '@chakra-ui/react';
import colors from '../../theme/colors';

export const StyledCard = styled(ChakraCard)`
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  min-width: 150px;
  width: 100%;
`;

export const StyledCardHeader = styled(ChakraCardHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary[50]};
  border-bottom: 1px solid ${colors.primary[200]};
  padding: 16px;
`;

export const StyledCardBody = styled(ChakraCardBody)`
  padding: 16px;
  background-color: ${colors.primary[100]};
`;

export const DeleteButton = styled(Button)`
  background-color: ${colors.secondary[500]};
  color: white;
  &:hover {
    background-color: ${colors.secondary[600]};
  }
`;

export const StyledIconButtonContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
`;
