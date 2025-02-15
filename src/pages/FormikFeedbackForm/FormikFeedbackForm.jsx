import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
const initialValues = {
  username: '',
  tel: '',
  massage: '',
  level: "",
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string().min(3, "Too short").max(6, "Too long").required("Required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
});

const FormikFeedbackForm = () => {
  const nameFieldId = useId();
  const telFieldId = useId();
  const masFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (value, action) => {
    console.log(value);
    // console.log(action);
    action.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}  validationSchema={FeedbackSchema}>
        <Form>
          <label htmlFor={nameFieldId}>username</label>
          <Field type="text" name="username" id={nameFieldId} />
          <ErrorMessage name="username" component="span" />
          <label htmlFor={telFieldId}>tel</label>
          <Field id={telFieldId} type="number" name="tel" />
          <ErrorMessage name="tel" component="span" />
          <label htmlFor={masFieldId}>Massage</label>
          <Field
            as="textarea"
            cols="20"
            rows="5"
            id={masFieldId}
            name="massage"
          />
          <ErrorMessage name="message" component="span" />

          <label htmlFor={levelFieldId}>level</label>
          <Field as="select" name="level" id={levelFieldId}>
            <option value="01">good</option>
            <option value="02">neutral</option>
            <option value="03">bad</option>
          </Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikFeedbackForm;
