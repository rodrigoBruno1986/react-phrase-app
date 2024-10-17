import React, { useEffect, useState } from 'react';
import {
  ModalContainer,
  Overlay,
  CloseButton,
  Header,
  Body,
} from './styles/ModalStyles.styles';
import { fetchPosts } from '../../../utils/api';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PostsModal: React.FC<PostsModalProps> = ({ isOpen, onClose }) => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const getPosts = async () => {
        try {
          const data = await fetchPosts();
          setPosts(data);
        } catch (err) {
          setError('Error fetching posts');
        }
      };

      getPosts();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <h2>Posts from API</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </Header>
        <Body>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {posts && (
            <ul>
              {posts.slice(0, 3).map((post) => (
                <li key={post.id}>
                  <strong>{post.title}</strong>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </Body>
      </ModalContainer>
    </Overlay>
  );
};

export default PostsModal;
