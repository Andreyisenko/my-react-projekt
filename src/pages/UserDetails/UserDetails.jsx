import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchUsersById } from '../../services/api';

const UserDetails = () => {
  const { usesId } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsersById(usesId);
      setUser(data);
    //   console.log(user);

    //   console.log(data.firstName);
    //   console.log(user.firstName);
    };
    getData();
  }, [usesId]);
  if (!user) {
    return <h2>Loading... </h2>
  }
  return (
    <div>
      UserDetails: #{usesId}
      <img src={user.image}/>
      <h2>
        {user.firstName} {user.lastName}
        </h2>  <p>Email: {user.email}</p>
        <nav>
            <Link  to='info'>Info</Link> 
             <Link  to='posts'>Posts</Link>
        </nav>
        <div>
            <Outlet/>
        </div>
      
    </div>
  );
};

export default UserDetails;
