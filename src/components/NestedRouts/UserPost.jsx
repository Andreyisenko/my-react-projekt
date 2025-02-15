import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsersByUserId } from '../../services/api';

const UserPost = () => {
  const { usesId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsersByUserId(usesId);
      setPosts(data);
    };
    getData();
  }, [usesId]);
  return (
    <div>
      <h2>User posts info</h2>
      <ul>
        {posts.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPost;
