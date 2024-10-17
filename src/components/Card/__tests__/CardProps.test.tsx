import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PhraseCard from '../Card';

jest.mock('../../../components/Modals/EditPhraseModal', () => ({
  __esModule: true,
  default: (props: any) => (
    <div>
      Mocked Edit Modal
      <button onClick={() => props.onSave('Frase actualizada')}>Guardar</button>
    </div>
  ),
}));

jest.mock('../../../components/Modals/DeleteConfirmationModal', () => ({
  __esModule: true,
  default: (props: any) => (
    <div>
      Mocked Delete Modal
      <button onClick={props.onDelete}>Confirmar Borrado</button>
    </div>
  ),
}));

describe('PhraseCard Component', () => {
  const mockOnDelete = jest.fn();
  const mockOnEdit = jest.fn();

  const setup = () => {
    render(
      <PhraseCard
        phrase='Frase de prueba'
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe renderizar el texto de la frase', () => {
    setup();
    expect(screen.getByText('Frase de prueba')).toBeInTheDocument();
  });

  it('debe abrir el modal de edición cuando se hace click en el botón de editar', () => {
    setup();
    const editButton = screen.getByLabelText('Editar frase');
    fireEvent.click(editButton);
    expect(screen.getByText('Mocked Edit Modal')).toBeInTheDocument();
  });

  it('debe abrir el modal de confirmación de borrado cuando se hace click en el botón de eliminar', () => {
    setup();
    const deleteButton = screen.getByLabelText('Eliminar frase');
    fireEvent.click(deleteButton);
    expect(screen.getByText('Mocked Delete Modal')).toBeInTheDocument();
  });

  it('debe llamar a la función onEdit cuando se guarda una nueva frase', () => {
    setup();
    fireEvent.click(screen.getByLabelText('Editar frase'));
    fireEvent.click(screen.getByText('Guardar'));
    expect(mockOnEdit).toHaveBeenCalledWith('Frase actualizada');
  });

  it('debe llamar a la función onDelete cuando se confirma el borrado', () => {
    setup();
    fireEvent.click(screen.getByLabelText('Eliminar frase'));
    fireEvent.click(screen.getByText('Confirmar Borrado'));
    expect(mockOnDelete).toHaveBeenCalled();
  });
});
