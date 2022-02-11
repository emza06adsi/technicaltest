import {DATA_SUCCESS, DATA_FAIL, DATA_LOAD} from '../../constants/type_reducer';
import getUsers from '../../services/users';

const _callTypeReducerLoad = () => {
  return {
    type: DATA_LOAD,
  };
};

const _callTypeReducerSucess = data => {
  return {
    type: DATA_SUCCESS,
    payload: data,
  };
};

// TODO: use this code for get error on fech ,this using errorBoundary last implementaion
const _callTypeReducerFail = () => {
  return {
    type: DATA_FAIL,
  };
};

const fechUser = () => async dispatch => {
  dispatch(_callTypeReducerLoad());

  const response = await getUsers();

  dispatch(_callTypeReducerSucess(response));
};

export {fechUser};
