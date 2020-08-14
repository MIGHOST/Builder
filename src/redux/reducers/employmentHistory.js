import {
  ADD_POSITION,
  DELETE_POSITION,
  CHANGE_DATA_POSITION,
  CHANGE_POSITION_START_DATE,
  CHANGE_POSITION_END_DATE,
  CLEAR_RESUME,
  UPDATE_RESUME,
} from "../../constants";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POSITION:
      return [...state, payload];
    case DELETE_POSITION:
      const newState = [...state];
      newState.splice(payload, 1);

      return newState;
    case CHANGE_DATA_POSITION:
      return state.map((item, index) =>
        index === payload.index
          ? { ...item, [payload.target.name]: payload.target.value }
          : item
      );
    case CHANGE_POSITION_START_DATE:
      return state.map((item, index) =>
        index === payload.index ? { ...item, ...payload } : item
      );
    case CHANGE_POSITION_END_DATE:
      return state.map((item, index) =>
        index === payload.index ? { ...item, ...payload } : item
      );
    case CLEAR_RESUME:
      return initialState;
    case UPDATE_RESUME:
      return payload.employmentHistory;
    default:
      return state;
  }
};
