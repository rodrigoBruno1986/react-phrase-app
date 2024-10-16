import React, { useState } from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import Card from './Card/Card';
import Pagination from '../components/Pagination/Pagination';

interface ListPhrasesProps {
  phrases: string[];
  query: string;
  onDelete: (phrase: string) => void;
  onEdit: (index: number, newPhrase: string) => void;
}

const ITEMS_PER_PAGE = 3;

const ListPhrases: React.FC<ListPhrasesProps> = ({
  phrases,
  query,
  onDelete,
  onEdit,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(phrases.length / ITEMS_PER_PAGE);

  const paginatedPhrases = phrases.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <SimpleGrid columns={[1, 1, 1]} spacing={5} mt={5} width='100%'>
        {paginatedPhrases.length === 0 && query === '' && (
          <Text mt={9} color='gray.500' justifyContent='center' display='flex'>
            No hay frases disponibles. ¡Agrega una nueva frase!
          </Text>
        )}

        {paginatedPhrases.length === 0 && query !== '' && (
          <Text mt={9} color='gray.500' justifyContent='center' display='flex'>
            No se encontraron resultados para "{query}".
          </Text>
        )}

        {paginatedPhrases.map((phrase, index) => {
          const realIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;

          return (
            <Card
              key={realIndex}
              phrase={phrase}
              onDelete={() => onDelete(phrase)}
              onEdit={(newPhrase) => onEdit(realIndex, newPhrase)}
            />
          );
        })}
      </SimpleGrid>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </>
  );
};

export default ListPhrases;
