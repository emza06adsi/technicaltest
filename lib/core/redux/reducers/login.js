import {DATA_SUCCESS, DATA_FAIL, DATA_LOAD} from '../../constants/type_reducer';

const initialState = {
  loading: false,
  error: false,
  data: null,
  errorMessage: '',
};

const LoginReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case DATA_LOAD:
      return {
        ...state,
        loading: true,
        data: null,
        error: false,
      };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
        errorMessage: '',
      };
    case DATA_FAIL:
      return {
        ...state,
        loading: false,
        data: null,
        error: true,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
