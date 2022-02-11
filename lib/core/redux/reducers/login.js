import {
  DATA_SUCCESS,
  DATA_FAIL,
  DATA_LOAD,
  DATA_INITIAL,
} from '../../constants/type_reducer';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

const LoginReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case DATA_LOAD:
      return {
        ...state,
        loading: true,
        data: [],
        error: false,
      };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
      };
    case DATA_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
      };
    default:
      return state;
  }
};

export default LoginReducer;
