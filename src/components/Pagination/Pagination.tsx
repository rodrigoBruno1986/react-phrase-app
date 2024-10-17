import React from 'react';
import {
  PaginationContainer,
  PaginationButton,
  PaginationText,
} from './styles/Pagination.style';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
        Anterior
      </PaginationButton>
      <PaginationText>{`Página ${currentPage} de ${totalPages}`}</PaginationText>
      <PaginationButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
