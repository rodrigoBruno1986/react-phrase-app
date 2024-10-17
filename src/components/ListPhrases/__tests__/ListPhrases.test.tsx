import React from 'react';
import { render, screen } from '@testing-library/react';
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

describe('ListPhrases Component', () => {
  const mockOnDelete = jest.fn();
  const mockOnEdit = jest.fn();

  const phrases = ['Frase 1', 'Frase 2', 'Frase 3'];

  const setup = (query = '', currentPage = 1) => {
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

  it('debe mostrar mensaje cuando no hay frases disponibles', () => {
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

  it('debe mostrar mensaje cuando no hay resultados de búsqueda', () => {
    render(
      <ListPhrases
        phrases={[]}
        query='no-encontrada'
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );
    expect(
      screen.getByText('No se encontraron resultados para "no-encontrada".')
    ).toBeInTheDocument();
  });
});
