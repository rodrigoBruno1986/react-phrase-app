import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FormErrorMessage, FormControl } from '@chakra-ui/react';
import { usePhrases } from '../../context/PhraseContext';
import {
  FormContainer,
  StyledInput,
  StyledButton,
} from './FormAddPhrase.styles';
import { phraseValidationSchema } from '../../utils/validation';

interface FormValues {
  phrase: string;
}

const FormAddPhrase = () => {
  const { addPhrase } = usePhrases();

  const initialValues: FormValues = { phrase: '' };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={phraseValidationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, actions) => {
        addPhrase(values.phrase);
        actions.resetForm();
      }}
    >
      {({ errors, touched, handleSubmit, validateForm }) => (
        <FormContainer as={Form} onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.phrase && touched.phrase}>
            <Field name='phrase'>
              {({ field }: { field: any }) => (
                <StyledInput
                  {...field}
                  placeholder='Escribe una frase...'
                  size='md'
                />
              )}
            </Field>
            <FormErrorMessage>{errors.phrase}</FormErrorMessage>
          </FormControl>
          <StyledButton type='submit' onClick={() => validateForm()}>
            Agregar Frase
          </StyledButton>
        </FormContainer>
      )}
    </Formik>
  );
};

export default FormAddPhrase;
