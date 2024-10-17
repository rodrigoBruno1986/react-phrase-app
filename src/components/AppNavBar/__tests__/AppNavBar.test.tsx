import { render, screen, fireEvent, act } from '@testing-library/react';
import AppNavBar from '../AppNavBar';

describe('AppNavBar Component', () => {
  const mockOnReset = jest.fn();

  const setup = (hasPhrases = true) => {
    render(
      <AppNavBar
        onReset={mockOnReset}
        hasPhrases={hasPhrases}
        onOpenPostsModal={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  };

  it('debe cambiar a "Reiniciando..." cuando se hace clic en el botón y debe deshabilitarse', async () => {
    setup(true);
    const resetButton = screen.getByText('Reiniciar App');

    await act(async () => {
      fireEvent.click(resetButton);
    });

    expect(resetButton).toHaveTextContent('Reiniciando...');
    expect(resetButton).toBeDisabled();
  });
});
