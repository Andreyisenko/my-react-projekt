import css from './Product.module.css'
const Film = ({autor, time, title}) => {
  return (
    <div className={css.wraper}>
     
<ul>
  <li>
    <h3 className={css.title}>{title}</h3>
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
