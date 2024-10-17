import React, { useState, useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import {
  Container,
  StyledHeading,
  ContentFormAddPhrase,
  ContentNavBar,
} from './App.styles';
import { PhraseProvider, usePhrases } from './context/PhraseContext';
import FormAddPhrase from '../src/components/FormAddPhrase/FormAddPhrase';
import SearchBar from '../src/components/SearchBar/SearchBar';
import ListPhrases from '../src/components/ListPhrases/ListPhrases';
import AppNavBar from './components/AppNavBar/AppNavBar';
import PostsModal from './components/Modals/PostsModal/PostsModal';

const App = () => {
  const { deletePhrase, filterPhrases, editPhrase } = usePhrases();
  const [query, setQuery] = useState<string>('');
  const [isPostsModalOpen, setIsPostsModalOpen] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  const filteredPhrases = useMemo(() => {
    return filterPhrases(query);
  }, [query, filterPhrases]);

  const handleResetApp = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleOpenPostsModal = () => {
    setIsPostsModalOpen(true);
  };

  const handleClosePostsModal = () => {
    setIsPostsModalOpen(false);
  };

  return (
    <>
      <ContentNavBar>
        <AppNavBar
          onReset={handleResetApp}
          hasPhrases={filteredPhrases.length > 0}
          onOpenPostsModal={handleOpenPostsModal}
        />
      </ContentNavBar>

      <Container>
        <StyledHeading as='h1' mb={6}>
          App de Gestión de Frases
        </StyledHeading>
        <ContentFormAddPhrase>
          <FormAddPhrase />
        </ContentFormAddPhrase>

        <Box
          mt={50}
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

      <PostsModal isOpen={isPostsModalOpen} onClose={handleClosePostsModal} />
    </>
  );
};

const AppWrapper = () => (
  <PhraseProvider>
    <App />
  </PhraseProvider>
);

export default AppWrapper;
