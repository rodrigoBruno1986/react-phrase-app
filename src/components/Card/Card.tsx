import React from 'react';
import { Text, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { StyledCard, StyledCardHeader } from './Card.styles';

interface CardProps {
  phrase: string;
  onDelete: () => void;
}

const PhraseCard: React.FC<CardProps> = ({ phrase, onDelete }) => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <Text size='md'>{phrase}</Text>
        <IconButton
          aria-label='Eliminar frase'
          icon={<FaTrash />}
          colorScheme='red'
          onClick={onDelete}
          size='sm'
        />
      </StyledCardHeader>
    </StyledCard>
  );
};

export default PhraseCard;
