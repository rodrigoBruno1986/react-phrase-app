import React, { useState } from 'react';
import { Text, IconButton, Flex } from '@chakra-ui/react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { StyledCard, StyledCardHeader } from './Card.styles';
import EditPhraseModal from '../Modals/EditPhraseModal';
import DeleteConfirmationModal from '../Modals/DeleteConfirmationModal';

interface CardProps {
  phrase: string;
  onDelete: () => void;
  onEdit: (newPhrase: string) => void;
}

const PhraseCard: React.FC<CardProps> = ({ phrase, onDelete, onEdit }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <StyledCard>
        <StyledCardHeader>
          <Text size='md'>{phrase}</Text>
        </StyledCardHeader>
      </StyledCard>
      <Flex justifyContent='flex-end'>
        <IconButton
          aria-label='Editar frase'
          icon={<FaEdit />}
          colorScheme='blue'
          onClick={() => setEditModalOpen(true)}
          size='sm'
          mr={2}
        />
        <IconButton
          aria-label='Eliminar frase'
          icon={<FaTrash />}
          colorScheme='red'
          onClick={() => setDeleteModalOpen(true)}
          size='sm'
        />
      </Flex>
      <EditPhraseModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        initialPhrase={phrase}
        onSave={(newPhrase) => {
          onEdit(newPhrase);
          setEditModalOpen(false);
        }}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={() => {
          onDelete();
          setDeleteModalOpen(false);
        }}
      />
    </>
  );
};

export default PhraseCard;
