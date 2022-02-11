import {DATA_SUCCESS, DATA_FAIL, DATA_LOAD} from '../../constants/type_reducer';

const initialState = {
  loading: false,
  error: false,
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

export default UsersReducer;
