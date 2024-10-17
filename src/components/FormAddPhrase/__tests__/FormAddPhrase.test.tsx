import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormAddPhrase from '../FormAddPhrase';
import { usePhrases } from '../../../context/PhraseContext';

jest.mock('../../../context/PhraseContext', () => ({
  usePhrases: jest.fn(),
}));

describe('FormAddPhrase Component', () => {
  const mockAddPhrase = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (usePhrases as jest.Mock).mockReturnValue({ addPhrase: mockAddPhrase });
  });

  const setup = () => {
    render(<FormAddPhrase />);
  };

  it('renderiza correctamente el formulario', () => {
    setup();
    expect(
      screen.getByPlaceholderText('Escribe una frase...')
    ).toBeInTheDocument();
    expect(screen.getByText('Agregar Frase')).toBeInTheDocument();
  });

  it('llama a addPhrase cuando se envía una frase válida', async () => {
    setup();

    const textArea = screen.getByPlaceholderText('Escribe una frase...');
    const submitButton = screen.getByText('Agregar Frase');

    fireEvent.change(textArea, { target: { value: 'Frase válida' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockAddPhrase).toHaveBeenCalledWith('Frase válida');
    });
  });

  it('resetea el formulario después de enviar una frase válida', async () => {
    setup();

    const textArea = screen.getByPlaceholderText('Escribe una frase...');
    const submitButton = screen.getByText('Agregar Frase');

    fireEvent.change(textArea, { target: { value: 'Frase válida' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(textArea).toHaveValue('');
    });
  });
});
