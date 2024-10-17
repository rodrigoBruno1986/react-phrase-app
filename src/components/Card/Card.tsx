import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import {
  StyledCard,
  StyledCardHeader,
  StyledIconButtonContainer,
  StyledButton,
  StyledFlex,
  StyledText,
} from './styles/Card.styles';
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
      <StyledFlex>
        <StyledCard>
          <StyledCardHeader>
            <StyledText>{phrase}</StyledText>
          </StyledCardHeader>
        </StyledCard>

        <StyledIconButtonContainer>
          <StyledButton
            aria-label='Editar frase'
            onClick={() => setEditModalOpen(true)}
            style={{ fontSize: '14px', color: 'grey' }}
          >
            <FaEdit />
          </StyledButton>
          <StyledButton
            aria-label='Eliminar frase'
            onClick={() => setDeleteModalOpen(true)}
            style={{ fontSize: '14px', color: 'grey' }}
          >
            <FaTrash />
          </StyledButton>
        </StyledIconButtonContainer>
      </StyledFlex>

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
