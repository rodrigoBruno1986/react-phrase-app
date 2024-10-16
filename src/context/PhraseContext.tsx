import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { useToastNotification } from '../hooks/useToastNotification';

interface PhraseContextType {
  phrases: string[];
  addPhrase: (phrase: string) => void;
  deletePhrase: (phrase: string) => void;
  editPhrase: (index: number, newPhrase: string) => void;
  filterPhrases: (query: string) => string[];
}

const PhraseContext = createContext<PhraseContextType | undefined>(undefined);

export const usePhrases = () => {
  const context = useContext(PhraseContext);
  if (!context)
    throw new Error('usePhrases must be used within a PhraseProvider');
  return context;
};

const getPhrasesFromLocalStorage = (): string[] => {
  const storedPhrases = localStorage.getItem('phrases');
  return storedPhrases ? JSON.parse(storedPhrases) : [];
};

const savePhrasesToLocalStorage = (phrases: string[]) => {
  localStorage.setItem('phrases', JSON.stringify(phrases));
};

export const PhraseProvider = ({ children }: { children: ReactNode }) => {
  const [phrases, setPhrases] = useState<string[]>(getPhrasesFromLocalStorage);
  const { showSuccessToast } = useToastNotification();

  useEffect(() => {
    savePhrasesToLocalStorage(phrases);
  }, [phrases]);

  const addPhrase = (phrase: string) => {
    setPhrases([...phrases, phrase]);
    showSuccessToast('Frase agregada exitosamente');
  };

  const deletePhrase = (phraseToDelete: string) => {
    const updatedPhrases = phrases.filter(
      (phrase) => phrase !== phraseToDelete
    );
    setPhrases(updatedPhrases);
    showSuccessToast('Frase eliminada exitosamente');
  };

  const editPhrase = (index: number, newPhrase: string) => {
    const updatedPhrases = [...phrases];
    updatedPhrases[index] = newPhrase;
    setPhrases(updatedPhrases);
    showSuccessToast('Frase editada exitosamente');
  };

  const filterPhrases = (query: string) => {
    return phrases.filter((phrase) =>
      phrase.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <PhraseContext.Provider
      value={{ phrases, addPhrase, deletePhrase, filterPhrases, editPhrase }}
    >
      {children}
    </PhraseContext.Provider>
  );
};
