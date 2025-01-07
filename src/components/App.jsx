
import { BookList, favouriteBooks } from "./Create/create";




const App = () => {
  return (
    <>
	  <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
};
export default App