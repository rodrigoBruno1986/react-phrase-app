import styled from 'styled-components';

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
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
