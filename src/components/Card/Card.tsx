import React, { useState } from 'react';
import { Text, IconButton, Flex } from '@chakra-ui/react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import {
  StyledCard,
  StyledCardHeader,
  StyledIconButtonContainer,
} from './Card.styles';
import EditPhraseModal from '../Modals/EditPhraseModal';
import DeleteConfirmationModal from '../Modals/DeleteConfirmationModal';
import colors from '../../theme/colors';

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
      <Flex alignItems='center'>
        <StyledCard>
          <StyledCardHeader>
            <Text size='md'>{phrase}</Text>
          </StyledCardHeader>
        </StyledCard>

        <StyledIconButtonContainer>
          <IconButton
            aria-label='Editar frase'
            icon={<FaEdit />}
            onClick={() => setEditModalOpen(true)}
            size='sm'
            fontSize='14px'
            background='trasparent'
            color={colors.primary[500]}
            _hover={{ color: colors.primary[700] }}
          />
          <IconButton
            aria-label='Eliminar frase'
            icon={<FaTrash />}
            onClick={() => setDeleteModalOpen(true)}
            size='sm'
            fontSize='14px'
            background='trasparent'
            color={colors.secondary[500]}
            _hover={{ color: colors.secondary[700] }}
          />
        </StyledIconButtonContainer>
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
