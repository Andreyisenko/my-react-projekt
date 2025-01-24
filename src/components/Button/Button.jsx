// Button.jsx
import clsx from 'clsx'
import css from './Button.module.css'
 const Button = ({ variant, children }) => {
    
    // Базові стилі кнопки з кількома варіантами відображення
    return <button className={clsx(css.button, variant)}>{children}</button>;
  };
  export default Button

