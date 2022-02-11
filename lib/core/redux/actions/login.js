import {DATA_SUCCESS, DATA_FAIL, DATA_LOAD} from '../../constants/type_reducer';
import DataUser from '../../constants/data_users.json';

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

const _callTypeReducerFail = failure => {
  return {
    type: DATA_FAIL,
    payload: failure,
  };
};

const fechLogin = user => async dispatch => {
  dispatch(_callTypeReducerLoad());
  let foundUser;
  foundUser = DataUser.some(userLocal => {
    return (
      userLocal.email === user.email && userLocal.password === user.password
    );
  }, 300);

  setTimeout(() => {
    if (foundUser) {
      dispatch(_callTypeReducerSucess(user));
    } else {
      dispatch(_callTypeReducerFail('Usuario no registrado'));
    }
  }, 1000);
};

export {fechLogin};
