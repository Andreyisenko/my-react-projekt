import { useEffect, useState } from 'react';
import UsersList from '../../components/NestedRouts/UsersList';
import { fetchUsers } from '../../services/api';
import SearchBar from '../SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  // const [query, setQuery] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    console.log();
  }, []);

  const handleChangeQuery = value => {
    // setQuery(value)
    searchParams.set('query', value);
    // searchParams.set('page', 1)
    setSearchParams(searchParams);
  };

  const filteredData = users.filter(user =>
    user.firstName.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <UsersList users={filteredData} />
    </>
  );
};

export default Users;
