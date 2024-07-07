import { ErrorMessage, Field, Form, Formik } from 'formik';
import CustomButton from './CustomButton';
import { bookCamperSchema } from '../schemas';

const BookCamperForm = () => {
  return (
    <div className="w-[448px] p-6 border-[1px] border-primary border-opacity-20 rounded-[10px]">
      <div className="mb-6">
        <p className="font-semibold text-primary text-xl mb-2">Book your campervan now</p>
        <p className="font-normal text-base text-slate-blue">
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={bookCamperSchema}
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
      >
        <Form autoComplete="off">
          <div className="flex flex-col gap-[14px] mb-6">
            <label>
              <Field name="name" type="text" placeholder="Name" className="form_input" />
              <ErrorMessage name="name" component="div" className="form_error_message" />
            </label>
            <label>
              <Field name="email" type="email" placeholder="Email" className="form_input" />
              <ErrorMessage name="email" component="div" className="form_error_message" />
            </label>
            <label>
              <Field
                name="bookingDate"
                type="date"
                placeholder="Booking date"
                className="form_input"
              />
              <ErrorMessage name="bookingDate" component="div" className="form_error_message" />
            </label>
            <label>
              <Field name="comment" as="textarea" placeholder="Name" className="form_textarea" />
              <ErrorMessage name="comment" component="div" className="form_error_message" />
            </label>
          </div>

          <CustomButton type="submit" otherStyles="px-[60px]">
            Send
          </CustomButton>
        </Form>
      </Formik>
    </div>
  );
};

export default BookCamperForm;
