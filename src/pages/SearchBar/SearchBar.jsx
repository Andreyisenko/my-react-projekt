import { Field, Form, Formik } from 'formik';

const SearchBar = ({ handleChangeQuery, query }) => {

  const onSubmit = values => {
    console.log(values.query);
    
    // setInputValue(evt.target.value);
    handleChangeQuery(values.query);
  };
  const initialValues = {
    query,
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>

        {/* <p>{values.query}</p> */}
      </Formik>
    </div>
  );
};
export default SearchBar;
