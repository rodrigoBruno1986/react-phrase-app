import React, { useState, useEffect } from 'react';
import {
  ListContainer,
  MessageText,
  PhrasesGrid,
  LoaderContainer,
  Loader,
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
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPhrases, setFilteredPhrases] = useState<string[]>(phrases);

  const totalPages = Math.ceil(filteredPhrases.length / ITEMS_PER_PAGE);

  const paginatedPhrases = filteredPhrases.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        setFilteredPhrases(
          phrases.filter((phrase) =>
            phrase.toLowerCase().includes(query.toLowerCase())
          )
        );
        setIsLoading(false);
      }, 800);

      return () => clearTimeout(timeout);
    } else {
      setFilteredPhrases(phrases);
    }
  }, [query, phrases]);

  return (
    <ListContainer>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
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
      )}

      {totalPages > 1 && !isLoading && (
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
