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

const App = () => {
  return (
    <div>
      <Film />
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
      <UserMenu name="Bob" />
    </div>
  );
};

export default App;
