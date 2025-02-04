import { useState } from "react";
const FormLoginForm = () => {
    
  const [values, setValues] = useState({
    login: '',
    password: '',
  });
  const handleChange = evt => {
    evt.preventDefault()
    console.log(evt.target.value);
    console.log(evt.target.name);
    setValues({
        ...values,
        [evt.target.name]: evt.target.value,
      });
  }
  const handleSumit = (evt) => {
    evt.preventDefault();
  
      // Значення полів
    console.log(values);
    setValues({
        login: "",
        password: "",
      });
  };
  

//   const handleLoginChange = evt => {
    
//     setValues({
//       ...values,
//       login: evt.target.value,
//     });
//   };

//   const handlePwdChange = evt => {
//     setValues({
//       ...values,
//       password: evt.target.value,
//     });
//   };

  return (
    <form onSubmit={handleSumit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default FormLoginForm;
