import axios from 'axios';
import {Users} from '../api/constApis';

const getUsers = async () => {
  console.log(Users);

  const response = await axios.get(Users);
  if (response.status === 200) {
    return response.data.results;
  } else {
    // TODO: here add an validate for feedback to client using throw from erroBoundary
    return [];
  }
};

export default getUsers;
