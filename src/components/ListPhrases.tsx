import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import Card from './Card/Card';

interface ListPhrasesProps {
  phrases: string[];
  query: string;
  onDelete: (phrase: string) => void;
  onEdit: (index: number, newPhrase: string) => void;
}

const ListPhrases: React.FC<ListPhrasesProps> = ({
  phrases,
  query,
  onDelete,
  onEdit,
}) => {
  return (
    <SimpleGrid columns={[1, 1, 1]} spacing={5} mt={5} width='100%'>
      {phrases.length === 0 && query === '' && (
        <Text mt={9} color='gray.500' justifyContent='center' display='flex'>
          No hay frases disponibles. ¡Agrega una nueva frase!
        </Text>
      )}

      {phrases.length === 0 && query !== '' && (
        <Text mt={9} color='gray.500' justifyContent='center' display='flex'>
          No se encontraron resultados para "{query}".
        </Text>
      )}

      {phrases.map((phrase, index) => (
        <Card
          key={index}
          phrase={phrase}
          onDelete={() => onDelete(phrase)}
          onEdit={(newPhrase) => onEdit(index, newPhrase)}
        />
      ))}
    </SimpleGrid>
  );
};

export default ListPhrases;
