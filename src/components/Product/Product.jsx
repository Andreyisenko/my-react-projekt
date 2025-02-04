import css from './Product.module.css'
import { FcClapperboard } from "react-icons/fc";
const Film = ({autor, time, title, name, imgUrl, price}) => {
  return (
    <div className={css.wraper}>
     
<ul>
  <li>
    <h3 className={css.title}>{title} <FcClapperboard /></h3>
    {/* <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt="Tacos With Lime" width="340" /> */}
    <p style={{color: "orange",
      border: "solid 1px brown" 
    }}>Autor: {autor}</p>
    <p >Time {time}</p>
    <p>{name}</p>
   <img src={imgUrl} alt="Taco" width="340" />
    <p>price: {price}</p>
  </li>
</ul>
    </div>
  )
}

export default Film

// console.log({children});