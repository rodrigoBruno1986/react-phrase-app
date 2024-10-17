import styled from 'styled-components';
import colors from '../../../theme/colors';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-testid'?: string;
}

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
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const Loader = styled.div.attrs<LoaderProps>({
  'data-testid': 'loader',
})`
  border: 4px solid ${colors.primary[300]};
  border-top: 4px solid ${colors.primary[500]};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
