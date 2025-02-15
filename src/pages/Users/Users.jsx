import { useEffect, useState } from 'react';
import UsersList from '../../components/NestedRouts/UsersList';
import { fetchUsers } from '../../services/api';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getData()
    console.log();
    
  }, []);
  return (
    <>
      <UsersList users={users} />
    </>
  );
};

export default Users;
