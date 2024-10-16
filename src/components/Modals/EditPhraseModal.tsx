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
import colors from '../../theme/colors';

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
          <Button mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button
            color={colors.primary[50]}
            onClick={() => onSave(newPhrase)}
            isDisabled={isSaveDisabled}
            bg={colors.primary[500]}
            _hover={{
              bg: colors.primary[300],
            }}
          >
            Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditPhraseModal;
