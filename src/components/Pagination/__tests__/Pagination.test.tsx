import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination Component', () => {
  const mockOnPageChange = jest.fn();

  const setup = (currentPage: number, totalPages: number) => {
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe renderizar el texto correcto de la paginación', () => {
    setup(2, 5);
    expect(screen.getByText('Página 2 de 5')).toBeInTheDocument();
  });

  it('debe deshabilitar el botón "Anterior" en la primera página', () => {
    setup(1, 5);
    const prevButton = screen.getByText('Anterior');
    expect(prevButton).toBeDisabled();
  });

  it('debe deshabilitar el botón "Siguiente" en la última página', () => {
    setup(5, 5);
    const nextButton = screen.getByText('Siguiente');
    expect(nextButton).toBeDisabled();
  });

  it('debe cambiar a la página anterior cuando se hace clic en "Anterior"', () => {
    setup(3, 5);
    const prevButton = screen.getByText('Anterior');
    fireEvent.click(prevButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('debe cambiar a la página siguiente cuando se hace clic en "Siguiente"', () => {
    setup(3, 5);
    const nextButton = screen.getByText('Siguiente');
    fireEvent.click(nextButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  it('no debe cambiar de página si "Anterior" está deshabilitado', () => {
    setup(1, 5);
    const prevButton = screen.getByText('Anterior');
    fireEvent.click(prevButton);
    expect(mockOnPageChange).not.toHaveBeenCalled();
  });

  it('no debe cambiar de página si "Siguiente" está deshabilitado', () => {
    setup(5, 5);
    const nextButton = screen.getByText('Siguiente');
    fireEvent.click(nextButton);
    expect(mockOnPageChange).not.toHaveBeenCalled();
  });
});
