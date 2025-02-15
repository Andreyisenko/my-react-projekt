
import { HiUser } from "react-icons/hi";
import css from './User.module.css'
export default function UserMenu({ name }) {
  return (
    <div>
      <p><HiUser className={css.myIcon} size='25'/> {name}</p>
      <p><HiUser className={css.myIcon} /> {name}</p>
    </div>
  );
};