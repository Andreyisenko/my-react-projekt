  // LoginButton.jsx
  import css from './Button.module.css'
import Button  from "./Button";
   const LoginButton = () => {
    // Унікальна логіка кнопки логіна
    return <Button variant={css.primary}>Login</Button>;
  };

  export default LoginButton
  