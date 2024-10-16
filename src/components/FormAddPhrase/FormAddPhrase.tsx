import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormErrorMessage, FormControl } from '@chakra-ui/react';
import { usePhrases } from '../../context/PhraseContext';
import {
  FormContainer,
  StyledInput,
  StyledButton,
} from './FormAddPhrase.styles';

interface FormValues {
  phrase: string;
}

const validationSchema = Yup.object({
  phrase: Yup.string()
    .min(5, 'La frase debe tener al menos 5 caracteres')
    .max(150, 'La frase no puede superar los 150 caracteres')
    .required('Campo obligatorio'),
});

const FormAddPhrase = () => {
  const { addPhrase } = usePhrases();

  const initialValues: FormValues = { phrase: '' };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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
