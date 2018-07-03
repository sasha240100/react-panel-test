import {AUTH} from '../actions/authAction';

export default function authReducer(state = {logged: false}, action) {
  switch (action.type) {
    case AUTH:
      return {
        logged: action.logged,
        username: action.username,
        password: action.password
      };

      break;
    default:
      return state;
  }
}
