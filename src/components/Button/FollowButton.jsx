import  Button  from "./Button";
import css from './Button.module.css'

  // FollowButton.jsx
  const FollowButton = () => {
    // Унікальна логіка кнопки підписки
    return <Button variant={css["secondary"]}>Follow</Button>;
  };
  export default FollowButton