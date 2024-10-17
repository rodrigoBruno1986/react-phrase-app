import styled from 'styled-components';
import colors from '../../../theme/colors';

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${colors.primary[800]};
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LogoImage = styled.img`
  height: 40px;
  margin-left: 1rem;
`;

export const ResetButton = styled.button`
  padding: 10px 20px;
  background-color: ${colors.secondary[500]};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondary[300]};
  }

  &:disabled {
    background-color: ${colors.secondary[300]};
    cursor: not-allowed;

    &:hover {
      background-color: ${colors.gray[400]};
    }
  }
`;

export const ShowPostsButton = styled(ResetButton)`
  background-color: ${colors.secondary[500]};
  margin-right: 15px;

  &:hover {
    background-color: ${colors.secondary[300]};
  }

  &:disabled {
    background-color: ${colors.secondary[300]};
  }
`;
export const ContentButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
