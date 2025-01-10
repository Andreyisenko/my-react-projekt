import css from './Product.module.css'
import { FcClapperboard } from "react-icons/fc";
const Film = ({autor, time, title, children}) => {
  return (
    <div className={css.wraper}>
     
<ul>
  <li>
    <h3 className={css.title}>{children}{title} <FcClapperboard /></h3>
    <p style={{color: "orange",
      border: "solid 1px brown" 
    }}>Autor: {autor}</p>
    <p style={{backgroundColor: "blue",
      color: "gray"
    }}>Time {time}</p>
  </li>
</ul>
    </div>
  )
}

export default Film
