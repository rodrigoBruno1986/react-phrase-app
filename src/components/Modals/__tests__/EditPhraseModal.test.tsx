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
    expect(screen.getByText('Editar sdsdsdsfrase')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Frase inicial')).toBeInTheDocument();
  });

  it('debe cerrar el modal al hacer clic en "Cancelar"', () => {
    setup();
    fireEvent.click(screen.getByText('Cancelar'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('debe deshabilitar el botón "Guardar" si la frase no ha cambiado', () => {
    setup();
    const saveButton = screen.getByText('Guardar');
    expect(saveButton).toBeDisabled();
  });

  it('debe habilitar el botón "Guardar" si la frase ha cambiado', async () => {
    setup();
    const inputField = screen.getByPlaceholderText('Editar frase...');
    const saveButton = screen.getByText('Guardar');

    fireEvent.change(inputField, { target: { value: 'Nueva frase' } });

    await waitFor(() => {
      expect(saveButton).not.toBeDisabled();
    });
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
    expect(screen.queryByText('Editar sdsdsdsfrase')).toBeNull();
  });
});
