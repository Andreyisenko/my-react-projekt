// import { BookList, favouriteBooks } from './Create/create';

import Alert from './Alert/Alert';
import Create from './Create/create';
import Film from './Product/Product';

const App = () => {
  return (
    <>
      <h2>Film</h2>
      <Create />
      <Film title="GoT" autor="Stivenson" time={2} />
      <Film  title="Taxi"
    autor="Dilan Bob"
    time={3}/>
      <Film title="Aqwamen" autor="Vin Disel" time={4} />
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
    </>
  );
};
export default App;

import clsx from 'clsx';

const className = clsx(
  'first',
  10,
  undefined && 'second',
  true && 'third',
  false ? 'fourth' : 'fifth'
);
console.log(className);
