import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';
import { useDebounce } from '../../../hooks/useDebounce';

jest.mock('../../../hooks/useDebounce', () => ({
  useDebounce: jest.fn(),
}));

describe('SearchBar Component', () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe renderizar el input correctamente', () => {
    (useDebounce as jest.Mock).mockReturnValue('test-query');

    render(<SearchBar onSearch={mockOnSearch} />);

    expect(screen.getByPlaceholderText('Buscar frases...')).toBeInTheDocument();
  });

  it('debe actualizar la búsqueda después del debounce', () => {
    const mockDebouncedQuery = 'debounced-query';
    (useDebounce as jest.Mock).mockReturnValue(mockDebouncedQuery);

    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Buscar frases...');
    fireEvent.change(input, { target: { value: 'nueva frase' } });

    expect(mockOnSearch).toHaveBeenCalledWith(mockDebouncedQuery);
  });
});
