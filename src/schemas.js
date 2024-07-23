import * as Yup from 'yup';

export const bookCamperSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  bookingDate: Yup.date().min(new Date(), 'Too early!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  comment: Yup.string().min(2, 'Too Short!'),
});
