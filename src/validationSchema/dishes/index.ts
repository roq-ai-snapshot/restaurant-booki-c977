import * as yup from 'yup';

export const dishValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  image: yup.string().nullable(),
  menu_id: yup.string().nullable().required(),
});
