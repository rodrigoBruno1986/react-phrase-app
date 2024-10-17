import React, { useState, useEffect } from 'react';
import {
  ModalContainer,
  Overlay,
  Header,
  Footer,
  Body,
  CloseButton,
  InputField,
  Button,
  SaveButton,
} from './styles/EditPhraseModal.style';

interface EditPhraseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhrase: string;
  onSave: (newPhrase: string) => void;
}

const EditPhraseModal: React.FC<EditPhraseModalProps> = ({
  isOpen,
  onClose,
  initialPhrase,
  onSave,
}) => {
  const [newPhrase, setNewPhrase] = useState(initialPhrase);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setNewPhrase(initialPhrase);
    }
  }, [isOpen, initialPhrase]);

  useEffect(() => {
    if (newPhrase.trim() === initialPhrase.trim() || newPhrase.trim() === '') {
      setIsSaveDisabled(true);
    } else {
      setIsSaveDisabled(false);
    }
  }, [newPhrase, initialPhrase]);

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <h2>Editar sdsdsdsfrase</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </Header>
        <Body>
          <InputField
            value={newPhrase}
            onChange={(e) => setNewPhrase(e.target.value)}
            placeholder='Editar frase...'
          />
        </Body>
        <Footer>
          <Button onClick={onClose}>Cancelar</Button>
          <SaveButton
            onClick={() => onSave(newPhrase)}
            disabled={isSaveDisabled}
          >
            Guardar
          </SaveButton>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default EditPhraseModal;
