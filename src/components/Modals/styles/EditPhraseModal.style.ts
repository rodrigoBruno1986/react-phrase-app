import styled from 'styled-components';
import colors from '../../../theme/colors';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Body = styled.div`
  margin: 20px 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.button`
  background: none;
  border: 1px solid ${colors.primary[300]};
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary[50]};
  }
`;

export const SaveButton = styled(Button)`
  background-color: ${colors.primary[500]};
  color: white;

  &:disabled {
    background-color: ${colors.primary[200]};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${colors.primary[300]};
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${colors.primary[300]};

  &:focus {
    border-color: ${colors.primary[500]};
    outline: none;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 8px;
`;
