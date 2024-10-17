import React from 'react';
import { Formik, Form, Field } from 'formik';
import { usePhrases } from '../../context/PhraseContext';
import {
  FormContainer,
  StyledTextArea,
  StyledButton,
} from './styles/FormAddPhrase.styles';
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
          <div>
            <Field name='phrase'>
              {({ field }: { field: any }) => (
                <StyledTextArea {...field} placeholder='Escribe una frase...' />
              )}
            </Field>
            {errors.phrase && touched.phrase && (
              <p style={{ color: 'red', marginTop: '5px' }}>{errors.phrase}</p>
            )}
          </div>
          <StyledButton type='submit' onClick={() => validateForm()}>
            Agregar Frase
          </StyledButton>
        </FormContainer>
      )}
    </Formik>
  );
};

export default FormAddPhrase;
