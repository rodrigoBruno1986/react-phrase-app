import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

interface PhraseContextType {
  phrases: string[];
  addPhrase: (phrase: string) => void;
  deletePhrase: (index: number) => void;
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

  useEffect(() => {
    savePhrasesToLocalStorage(phrases);
  }, [phrases]);

  const addPhrase = (phrase: string) => {
    setPhrases([...phrases, phrase]);
  };

  const deletePhrase = (index: number) => {
    setPhrases(phrases.filter((_, i) => i !== index));
  };

  const filterPhrases = (query: string) => {
    return phrases.filter((phrase) =>
      phrase.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <PhraseContext.Provider
      value={{ phrases, addPhrase, deletePhrase, filterPhrases }}
    >
      {children}
    </PhraseContext.Provider>
  );
};
