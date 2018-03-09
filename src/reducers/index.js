import { SET_NAME, SET_PREFIX, SET_BODY, SET_DESCRIPTION } from "../actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name };
    case SET_PREFIX:
      return { ...state, prefix: action.prefix };
    case SET_BODY:
      return { ...state, body: action.body };
    case SET_DESCRIPTION:
      return { ...state, description: action.description };
    default:
      return state;
  }
}
