import React, { useState, useEffect } from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { Container, StyledHeading, ContentFormAddPhrase } from './App.styles';
import { PhraseProvider, usePhrases } from './context/PhraseContext';
import FormAddPhrase from '../src/components/FormAddPhrase/FormAddPhrase';
import SearchBar from './components/SearchBar';
import Card from './components/Card/Card';

const App = () => {
  const { phrases, deletePhrase, filterPhrases, editPhrase } = usePhrases();
  const [filteredPhrases, setFilteredPhrases] = useState<string[]>(phrases);

  const handleSearch = (query: string) => {
    const filtered = filterPhrases(query);
    setFilteredPhrases(filtered);
  };

  useEffect(() => {
    setFilteredPhrases(phrases);
  }, [phrases]);

  return (
    <Container>
      <StyledHeading as='h1' mb={6}>
        Phrase Management App
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
        <SimpleGrid columns={[1, 1, 1]} spacing={5} mt={10} width='100%'>
          {filteredPhrases.map((phrase, index) => (
            <Card
              key={index}
              phrase={phrase}
              onDelete={() => deletePhrase(index)} // Mantén la funcionalidad de eliminar
              onEdit={(newPhrase) => editPhrase(index, newPhrase)} // Añade la funcionalidad de editar
            />
          ))}
        </SimpleGrid>
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
