
const Film = ({autor, time, title}) => {
  return (
    <div>
     
<ul>
  <li>
    <h3>{title}</h3>
    <p>Autor: {autor}</p>
    <p>Time {time}</p>
  </li>
</ul>
    </div>
  )
}

export default Film
