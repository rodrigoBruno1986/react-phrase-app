import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from '@chakra-ui/react';

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
    if (newPhrase.trim() === initialPhrase.trim() || newPhrase.trim() === '') {
      setIsSaveDisabled(true);
    } else {
      setIsSaveDisabled(false);
    }
  }, [newPhrase, initialPhrase]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar frase</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={newPhrase}
            onChange={(e) => setNewPhrase(e.target.value)}
            placeholder='Editar frase...'
          />
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme='blue'
            mr={3}
            onClick={() => onSave(newPhrase)}
            isDisabled={isSaveDisabled}
          >
            Guardar
          </Button>
          <Button variant='ghost' onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditPhraseModal;
