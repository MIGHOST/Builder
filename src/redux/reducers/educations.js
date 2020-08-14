import {
  ADD_EDUCATION,
  SET_EDUCATION,
  DELETE_EDUCATION,
} from "../actions/educations";
import { CLEAR_RESUME, UPDATE_RESUME } from "../../constants";

const initialState = [
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EDUCATION:
      return [...state, action.payload];
    case SET_EDUCATION:
      const newStateSet = state.slice();
      newStateSet.splice(action.payload.index, 1, action.payload.education);
      return newStateSet;
    case DELETE_EDUCATION:
      const newStateDelete = state.slice();
      newStateDelete.splice(action.payload, 1);
      return newStateDelete;
    case CLEAR_RESUME:
      return initialState;
    case UPDATE_RESUME:
      return action.payload.educations;
    default:
      return state;
  }
};
