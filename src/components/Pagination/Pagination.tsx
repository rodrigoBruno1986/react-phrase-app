import React from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';

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
    <HStack spacing={4} mt={4} justifyContent='center'>
      <Button onClick={handlePrevPage} isDisabled={currentPage === 1}>
        Anterior
      </Button>
      <Text>{`Página ${currentPage} de ${totalPages}`}</Text>
      <Button onClick={handleNextPage} isDisabled={currentPage === totalPages}>
        Siguiente
      </Button>
    </HStack>
  );
};

export default Pagination;
