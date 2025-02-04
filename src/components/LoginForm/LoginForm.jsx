import css from './LoginForm.module.css'
import { useId } from 'react';

const LoginForm = ({onLogin}) => {
const loginId = useId()
const passwordId = useId()
    const handleSubmit = (evt) => {
evt.preventDefault()
// console.log(onLogin);
// console.log(evt.target.elements);
const form = evt.target;
const {login, password} = form.elements
onLogin({login: login.value,
    password: password.value

})

// console.log(login);
// console.log(password);
// console.log(login.value);
// console.log(password.value);
    form.reset()
}

    return (
      <form onSubmit={handleSubmit} className={css.forM}>
        <label htmlFor={loginId}>Login</label>
        <input type="text" name="login" id={loginId} placeholder='Name...' />
        <label htmlFor={passwordId}>Password</label>
        <input type="password" name="password" id={passwordId} placeholder='password...'/>
        <button type="submit">Log in </button>
      </form>
    );
  };
  export default LoginForm