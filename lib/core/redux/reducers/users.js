import {DATA_SUCCESS, DATA_FAIL, DATA_LOAD} from '../../constants/type_reducer';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  data: [],
};

const UsersReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case DATA_LOAD:
      return {
        ...state,
        loading: true,
        data: [],
        error: false,
        errorMessage: '',
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
        data: [],
        error: true,
        errorMessage: '',
      };
    default:
      return state;
  }
};

export default UsersReducer;
