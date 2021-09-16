import * as Actions from '../actions';

const isEmpty = require("is-empty");

const initialState = {
  products: [],
  product: {},
  loading: false,
  errors: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products
      };
    case Actions.LOADING:
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
