import styled from 'styled-components';
import colors from '../../../theme/colors';

export const StyledCard = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  padding: 16px;
  background-color: ${colors.primary[50]};
  width: 100%;
`;

export const StyledCardHeader = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StyledIconButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 5px;
`;

export const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
`;
