import React from 'react';
import {
  Overlay,
  ModalContainer,
  Header,
  CloseButton,
  Body,
  Footer,
  Button,
  DeleteButton,
} from './styles/DeleteConfirmationModal.style';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <h2>Confirmar el borrado</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </Header>
        <Body>¿Estás seguro de eliminar la frase?</Body>
        <Footer>
          <Button onClick={onClose}>Cancelar</Button>
          <DeleteButton onClick={onDelete}>Borrar</DeleteButton>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default DeleteConfirmationModal;
