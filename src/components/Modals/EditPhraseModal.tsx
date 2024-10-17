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
  ErrorText,
} from './styles/EditPhraseModal.style';

interface EditPhraseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhrase: string;
  onSave: (newPhrase: string) => void;
}

const MIN_CHARACTERS = 5;

const EditPhraseModal: React.FC<EditPhraseModalProps> = ({
  isOpen,
  onClose,
  initialPhrase,
  onSave,
}) => {
  const [newPhrase, setNewPhrase] = useState(initialPhrase);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setNewPhrase(initialPhrase);
      setError(null);
    }
  }, [isOpen, initialPhrase]);

  useEffect(() => {
    if (newPhrase.length >= MIN_CHARACTERS) {
      setIsSaveDisabled(false);
      setError(null);
    } else {
      setIsSaveDisabled(true);
      setError(`La frase debe tener al menos ${MIN_CHARACTERS} caracteres.`);
    }
  }, [newPhrase]);

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <h2>Editar</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </Header>
        <Body>
          <InputField
            value={newPhrase}
            onChange={(e) => setNewPhrase(e.target.value)}
            placeholder='Editar frase...'
          />
          {error && <ErrorText>{error}</ErrorText>}
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
