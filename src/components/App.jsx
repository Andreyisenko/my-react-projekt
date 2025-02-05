import Button from './Button/Button';
import ClickCounter from './Button/FollowButton';
import LoginButton from './Button/LoginButton';
import Create from './Create/create';
import BookList from './FavouriteBooks/FavouriteBooks';
import Film from './Product/Product';
import favouriteBooks from '../favouriteBooks.json';
import Mailbox from './Mailbox/Mailbox';
import Product from './Prod/Prod';
import UserMenu from './User/User';
import LoginForm from './LoginForm/LoginForm';
import MuComponent from './MyComponent/MyComponent';
import SearchBar from './SearchBar/SearchBar';
import LangSwitcher from './LangSwitcher/LangSwitcher ';
import { useState } from 'react';
import FormLoginForm from './FormLoginForm/FormLoginForm';
import { Formik } from 'formik';

const App = () => {
  // const handleLogin = userData => {
  //   console.log(userData);
  // };
  const [lang, setLang] = useState('uk');
  const [coffeeSize, setCoffeeSize] = useState('sm');
  const handleSizeChange = evt => {
    console.log(evt.target.value);
    setCoffeeSize(evt.target.value);
  };
  const [hasAccepted, setHasAccepted] = useState(false);
  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      {/* <Film />
      <hr></hr>
      <Button />
      <ClickCounter />
      <LoginButton />
      <hr></hr>
      <Create />
      <hr></hr>
      <BookList books={favouriteBooks} />
      <hr></hr>
      <Mailbox name="Іван" unreadMessages={6} />
      <hr></hr>
      <Product
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        name="Taco"
        price={23.99}
      />
      <hr></hr>
      <UserMenu name="Bob" /> */}
      {/* <h1>Please login to your account!</h1>
      Передаємо колбек як пропс форми
      <LoginForm onLogin={handleLogin} />   
      <MuComponent/> 
      <hr></hr>
      <SearchBar/>  */}
      {/* <p>Selected language:{lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <hr></hr>
      <h1>Select coffee size {coffeeSize}</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === 'sm'}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === 'md'}
          onChange={handleSizeChange}
        />
        Meduim
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === 'lg'}
          onChange={handleSizeChange}
        />
        Large
      </label>
      <hr></hr>
      <label>
        <input type="checkbox" name="terms" 
         checked={hasAccepted}
         onChange={handleChange}/>I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>Proceed</button>
      <hr></hr> */}
      <FormLoginForm/>
      <hr></hr>
      <Formik/>
    </div>
  );
};

export default App;
