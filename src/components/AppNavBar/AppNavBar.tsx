import React, { useState } from 'react';
import {
  NavBar,
  LogoImage,
  ResetButton,
  ShowPostsButton,
  ContentButtons,
} from './styles/AppNavBar.styles';

interface NavBarProps {
  onReset: () => void;
  hasPhrases: boolean;
  onOpenPostsModal: () => void;
}

const AppNavBar: React.FC<NavBarProps> = ({
  onReset,
  hasPhrases,
  onOpenPostsModal,
}) => {
  const [appReset, setAppReset] = useState(false);

  const handleReset = () => {
    setAppReset(true);

    setTimeout(() => {
      onReset();
      setAppReset(false);
    }, 3000);
  };

  return (
    <NavBar>
      <LogoImage src='/LogoPie.png' alt='App Logo' />
      <ContentButtons>
        <ShowPostsButton onClick={onOpenPostsModal}>Datos Api</ShowPostsButton>
        <ResetButton onClick={handleReset} disabled={appReset || !hasPhrases}>
          {appReset ? 'Reiniciando...' : 'Reiniciar App'}
        </ResetButton>
      </ContentButtons>
    </NavBar>
  );
};

export default AppNavBar;
