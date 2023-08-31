import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  reservation_time: yup.date().required(),
  table_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
