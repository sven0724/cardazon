import * as Actions from '../actions';

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  errors: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case Actions.USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case Actions.GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state;
  }
}
