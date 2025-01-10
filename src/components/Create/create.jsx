// export const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];

// export const BookList = ({ books} ) => {
//   return (
// 	<ul> 
// 	  {books.map((book) => {
// 		return <li key={book.id}>{book.name}</li>;
// 	  })}
// 	</ul>
//   );
// };
import css from './Create.module.css'
const Create = () => {
     const arr = [{
        id: 1, title: "Сало"},
        {id: 2, title: "вода"},
        {id: 3, title: "Мясо"},
        {id: 4, title: "Цукерки"},
          ]
  
    return (
    <div >
        <ul className={css.list}>
            {arr.map((item) => <li key={item.id}> {item.title}</li>)}
        </ul>
    </div>
  )
}

export default Create