import styled from 'styled-components';
import colors from '../../../theme/colors';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
`;

export const StyledTextArea = styled.textarea`
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${colors.primary[300]};
  &:focus {
    border-color: ${colors.primary[500]};
    outline: none;
  }
  resize: vertical;
  min-height: 100px;
  width: 100%;
`;

export const StyledButton = styled.button`
  font-size: 1.1rem;
  padding: 10px;
  background-color: ${colors.primary[500]};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary[600]};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
