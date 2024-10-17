import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteConfirmationModal from '../DeleteConfirmationModal';

describe('DeleteConfirmationModal Component', () => {
  const mockOnClose = jest.fn();
  const mockOnDelete = jest.fn();

  const setup = (isOpen = true) => {
    render(
      <DeleteConfirmationModal
        isOpen={isOpen}
        onClose={mockOnClose}
        onDelete={mockOnDelete}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe renderizar el modal correctamente cuando está abierto', () => {
    setup();
    expect(screen.getByText('Confirmar el borrado')).toBeInTheDocument();
    expect(
      screen.getByText('¿Estás seguro de eliminar la frase?')
    ).toBeInTheDocument();
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
    expect(screen.getByText('Borrar')).toBeInTheDocument();
  });

  it('no debe renderizar nada cuando el modal está cerrado', () => {
    setup(false);
    expect(screen.queryByText('Confirmar el borrado')).toBeNull();
    expect(
      screen.queryByText('¿Estás seguro de eliminar la frase?')
    ).toBeNull();
  });

  it('debe llamar a onClose al hacer clic en "Cancelar"', () => {
    setup();
    fireEvent.click(screen.getByText('Cancelar'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('debe llamar a onDelete al hacer clic en "Borrar"', () => {
    setup();
    fireEvent.click(screen.getByText('Borrar'));
    expect(mockOnDelete).toHaveBeenCalled();
  });
});
