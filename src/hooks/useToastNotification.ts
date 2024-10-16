import { useToast } from '@chakra-ui/react';

export const useToastNotification = () => {
  const toast = useToast();

  const showSuccessToast = (message: string) => {
    toast({
      title: message,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const showErrorToast = (message: string) => {
    toast({
      title: message,
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  return {
    showSuccessToast,
    showErrorToast,
  };
};
