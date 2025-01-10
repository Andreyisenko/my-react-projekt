// import { BookList, favouriteBooks } from './Create/create';

import Alert from './Alert/Alert';
import Create from './Create/create';
import Film from './Product/Product';
import { FcAssistant } from 'react-icons/fc';
import { FcAddRow } from 'react-icons/fc';
import { FcDeployment } from 'react-icons/fc';
import { FcFilmReel } from "react-icons/fc";
import  LoginButton  from './Button/LoginButton';
import FollowButton from './Button/FollowButton';
const App = () => {
  return (
    <>
      <h2>
        
        <FcAssistant color='green' size={50} />
        Film  
      </h2>
      <Button> Reset </Button>
<LoginButton />
<FollowButton/>
      <UserMenu name="Тарас"/>

      
      <Alert variant="info">
        <FcAddRow />
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        <FcDeployment />
        Payment received, thank you for your purchase
        <FcDeployment />
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
      <FcDeployment />
<FcFilmReel />
      <Create />
      <Film title="GoT" autor="Stivenson" time={2}>
        <FcDeployment size={50}/>
      </Film>
      <Film title="Taxi" autor="Dilan Bob" time={3} />
      <Film title="Aqwamen" autor="Vin Disel" time={4} />
    </>
  );
};
export default App;

import clsx from 'clsx';
import UserMenu from './User/User';
import Button from './Button/Button';

const className = clsx(
  'first',
  10,
  undefined && 'second',
  true && 'third',
  false ? 'fourth' : 'fifth'
);
console.log(className);
