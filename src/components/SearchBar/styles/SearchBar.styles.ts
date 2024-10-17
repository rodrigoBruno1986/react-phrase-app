import styled from 'styled-components';
import colors from '../../../theme/colors';

export const StyledInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${colors.gray[300]};
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${colors.primary[500]};
  }

  &::placeholder {
    color: ${colors.gray[300]};
  }
`;
