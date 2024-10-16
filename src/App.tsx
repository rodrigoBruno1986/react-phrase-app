import React, { useState, useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { Container, StyledHeading, ContentFormAddPhrase } from './App.styles';
import { PhraseProvider, usePhrases } from './context/PhraseContext';
import FormAddPhrase from '../src/components/FormAddPhrase/FormAddPhrase';
import SearchBar from './components/SearchBar';
import ListPhrases from './components/ListPhrases';

const App = () => {
  const { deletePhrase, filterPhrases, editPhrase } = usePhrases();
  const [query, setQuery] = useState<string>('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  const filteredPhrases = useMemo(() => {
    return filterPhrases(query);
  }, [query, filterPhrases]);

  return (
    <Container>
      <StyledHeading as='h1' mb={61}>
        App de Gestión de Frases
      </StyledHeading>
      <ContentFormAddPhrase>
        <FormAddPhrase />
      </ContentFormAddPhrase>

      <Box
        mt={10}
        maxW='700px'
        mx='auto'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <SearchBar onSearch={handleSearch} />
        <ListPhrases
          phrases={filteredPhrases}
          query={query}
          onDelete={deletePhrase}
          onEdit={editPhrase}
        />
      </Box>
    </Container>
  );
};

const AppWrapper = () => (
  <PhraseProvider>
    <App />
  </PhraseProvider>
);

export default AppWrapper;
