import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ListPhrases from '../ListPhrases';

jest.mock('../../Card/Card', () => ({ phrase, onDelete, onEdit }: any) => (
  <div>
    <p>{phrase}</p>
    <button onClick={() => onEdit('Frase actualizada')}>Editar</button>
    <button onClick={() => onDelete()}>Borrar</button>
  </div>
));

jest.mock(
  '../../Pagination/Pagination',
  () =>
    ({ currentPage, totalPages, onPageChange }: any) =>
      (
        <div>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <p>{`Página ${currentPage} de ${totalPages}`}</p>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      )
);

jest.mock('../styles/ListPhrases.styles', () => ({
  Loader: () => <div data-testid='loader'>Cargando...</div>,
  LoaderContainer: ({ children }: any) => <div>{children}</div>,
  ListContainer: ({ children }: any) => <div>{children}</div>,
  PhrasesGrid: ({ children }: any) => <div>{children}</div>,
  MessageText: ({ children }: any) => <p>{children}</p>,
}));

describe('ListPhrases Component', () => {
  const mockOnDelete = jest.fn();
  const mockOnEdit = jest.fn();

  const phrases = ['Frase 1', 'Frase 2', 'Frase 3'];

  const setup = (query = '') => {
    render(
      <ListPhrases
        phrases={phrases}
        query={query}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );
  };

  it('debe mostrar las frases correctamente', () => {
    setup();
    expect(screen.getByText('Frase 1')).toBeInTheDocument();
    expect(screen.getByText('Frase 2')).toBeInTheDocument();
    expect(screen.getByText('Frase 3')).toBeInTheDocument();
  });

  it('debe mostrar el mensaje de "No hay frases disponibles"', () => {
    render(
      <ListPhrases
        phrases={[]}
        query=''
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );
    expect(
      screen.getByText('No hay frases disponibles. ¡Agrega una nueva frase!')
    ).toBeInTheDocument();
  });

  it('debe mostrar el mensaje de "No se encontraron resultados" cuando no hay coincidencias con la búsqueda', async () => {
    render(
      <ListPhrases
        phrases={[]}
        query='no-encontrada'
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );

    await waitFor(() =>
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
    );

    expect(
      screen.getByText('No se encontraron resultados para "no-encontrada".')
    ).toBeInTheDocument();
  });

  it('debe mostrar el preloader cuando está cargando', () => {
    render(
      <ListPhrases
        phrases={[]}
        query='algo'
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
