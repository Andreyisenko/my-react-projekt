import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com';

export const fetchUsers = async () => {
  const { data } = await axios.get('users');
  return data.users;
};

export const fetchUsersById = async usesId => {
  const { data } = await axios.get(`users/${usesId}`);
  // console.log(data.firstName);
  // console.log(usesId);

  return data;
};

export const fetchUsersByUserId = async usesId => {
    const { data } = await axios.get(`/posts/user/${usesId}`);
    // console.log(data.firstName);
    // console.log(usesId);
  
    return data.posts;
  };
  