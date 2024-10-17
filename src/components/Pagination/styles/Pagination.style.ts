import styled from 'styled-components';
import colors from '../../../theme/colors';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  padding: 8px 12px;
  background-color: ${colors.gray[400]};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.gray[500]};
  }

  &:disabled {
    background-color: ${colors.gray[200]};
    cursor: not-allowed;
  }
`;

export const PaginationText = styled.span`
  font-size: 1rem;
  color: ${colors.gray[500]};
`;
