import * as Yup from 'yup';

export const phraseValidationSchema = Yup.object({
  phrase: Yup.string()
    .min(5, 'La frase debe tener al menos 5 caracteres')
    .max(150, 'La frase no puede superar los 150 caracteres')
    .required('Campo obligatorio'),
});
