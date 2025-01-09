// import { BookList, favouriteBooks } from './Create/create';

import Create from './Create/create';
import Film from './Product/Product';

const App = () => {
  return (
    <>
     <h2>Film</h2>
    <Film title="GoT"
    autor="Stivenson"
    time={2}/>
    <Film  title="Taxi"
    autor="Dilan Bob"
    time={3}/>
    <Film  title="Aqwamen"
    autor="Vin Disel"
    time={4}/>
      <Create />
    </>
  );
};
export default App;
