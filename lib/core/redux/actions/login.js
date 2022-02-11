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

const _callTypeReducerFail = () => {
  return {
    type: DATA_FAIL,
  };
};

const fechLogin = user => async dispatch => {
  dispatch(_callTypeReducerLoad());

  dispatch(_callTypeReducerSucess(['fulado de tal']));
};

export {fechLogin};
