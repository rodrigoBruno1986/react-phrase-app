import React, { useState } from 'react';
import {
  ListContainer,
  MessageText,
  PhrasesGrid,
} from './styles/ListPhrases.styles';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';

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
    <ListContainer>
      <PhrasesGrid>
        {paginatedPhrases.length === 0 && query === '' && (
          <MessageText>
            No hay frases disponibles. ¡Agrega una nueva frase!
          </MessageText>
        )}

        {paginatedPhrases.length === 0 && query !== '' && (
          <MessageText>
            No se encontraron resultados para "{query}".
          </MessageText>
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
      </PhrasesGrid>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </ListContainer>
  );
};

export default ListPhrases;
