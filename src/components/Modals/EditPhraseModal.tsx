import React, { useState } from 'react';
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
  Text,
} from '@chakra-ui/react';
import { phraseValidationSchema } from '../../utils/validation';

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
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    try {
      await phraseValidationSchema.validate({ phrase: newPhrase });
      setError(null);
      onSave(newPhrase);
    } catch (validationError: any) {
      setError(validationError.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Frase</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={newPhrase}
            onChange={(e) => setNewPhrase(e.target.value)}
            placeholder='Editar frase...'
          />
          {error && <Text color='red.500'>{error}</Text>}{' '}
          {/* Mostramos el error */}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSave}>
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
