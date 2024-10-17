import React, { useState } from 'react';
import { NavBar, LogoImage, ResetButton } from './styles/AppNavBar.styles';

interface NavBarProps {
  onReset: () => void;
  hasPhrases: boolean;
}

const AppNavBar: React.FC<NavBarProps> = ({ onReset, hasPhrases }) => {
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
      <ResetButton onClick={handleReset} disabled={appReset || !hasPhrases}>
        {appReset ? 'Reiniciando...' : 'Reiniciar App'}
      </ResetButton>
    </NavBar>
  );
};

export default AppNavBar;
