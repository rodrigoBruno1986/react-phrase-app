import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Card from './Card/Card';

interface ListPhrasesProps {
  phrases: string[];
  onDelete: (index: number) => void;
  onEdit: (index: number, newPhrase: string) => void;
}

const ListPhrases: React.FC<ListPhrasesProps> = ({
  phrases,
  onDelete,
  onEdit,
}) => {
  return (
    <SimpleGrid columns={[1, 1, 1]} spacing={5} mt={5} width='100%'>
      {phrases.map((phrase, index) => (
        <Card
          key={index}
          phrase={phrase}
          onDelete={() => onDelete(index)}
          onEdit={(newPhrase) => onEdit(index, newPhrase)}
        />
      ))}
    </SimpleGrid>
  );
};

export default ListPhrases;
