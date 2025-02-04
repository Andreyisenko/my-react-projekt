// Button.jsx
import clsx from 'clsx';
import css from './Button.module.css';
const Button = ({ variant }) => {
  const handleClick = () => {
    alert("I'm a button!");
  };
  // Базові стилі кнопки з кількома варіантами відображення
  return (
    <button onClick={handleClick} className={clsx(css.button, css[variant])}>
      Click me!
    </button>
  );
};
export default Button;
