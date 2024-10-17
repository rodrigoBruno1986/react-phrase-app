import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EditPhraseModal from '../EditPhraseModal';

describe('EditPhraseModal Component', () => {
  const mockOnClose = jest.fn();
  const mockOnSave = jest.fn();

  const setup = (isOpen = true, initialPhrase = 'Frase inicial') => {
    render(
      <EditPhraseModal
        isOpen={isOpen}
        onClose={mockOnClose}
        initialPhrase={initialPhrase}
        onSave={mockOnSave}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe renderizar correctamente cuando el modal está abierto', () => {
    setup();
    expect(screen.getByPlaceholderText('Editar frase...')).toBeInTheDocument();
    expect(screen.getByText('Editar')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Frase inicial')).toBeInTheDocument();
  });

  it('debe cerrar el modal al hacer clic en "Cancelar"', () => {
    setup();
    fireEvent.click(screen.getByText('Cancelar'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('debe deshabilitar el botón "Guardar" si la frase tiene menos de 5 caracteres', () => {
    setup();
    const inputField = screen.getByPlaceholderText('Editar frase...');
    const saveButton = screen.getByText('Guardar');

    fireEvent.change(inputField, { target: { value: 'Hola' } });

    expect(saveButton).toBeDisabled();
    expect(
      screen.getByText('La frase debe tener al menos 5 caracteres.')
    ).toBeInTheDocument();
  });

  it('debe habilitar el botón "Guardar" si la frase tiene al menos 5 caracteres', () => {
    setup();
    const inputField = screen.getByPlaceholderText('Editar frase...');
    const saveButton = screen.getByText('Guardar');

    fireEvent.change(inputField, { target: { value: 'Nueva frase' } });

    expect(saveButton).not.toBeDisabled();
    expect(
      screen.queryByText('La frase debe tener al menos 5 caracteres.')
    ).toBeNull();
  });

  it('debe llamar a la función onSave con la nueva frase', async () => {
    setup();
    const inputField = screen.getByPlaceholderText('Editar frase...');
    const saveButton = screen.getByText('Guardar');

    fireEvent.change(inputField, { target: { value: 'Nueva frase' } });

    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockOnSave).toHaveBeenCalledWith('Nueva frase');
    });
  });

  it('no debe renderizar nada si el modal está cerrado', () => {
    setup(false);
    expect(screen.queryByPlaceholderText('Editar frase...')).toBeNull();
  });
});
