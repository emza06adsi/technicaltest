import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import UsersReducer from './reducers/users';
import LoginReducer from './reducers/login';
import {composeWithDevTools} from 'redux-devtools-extension';

const Reducers = combineReducers({
  LoginState: LoginReducer,
  UsersState: UsersReducer,
});

const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
