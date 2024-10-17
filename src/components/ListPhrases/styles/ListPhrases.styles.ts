import styled from 'styled-components';
import colors from '../../../theme/colors';

export const ListContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const PhrasesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
`;

export const MessageText = styled.p`
  margin-top: 36px;
  color: ${colors.gray[500]};
  text-align: center;
  display: flex;
  justify-content: center;
`;
