import {
  REQUEST_MERCHANTS,
  RECEIVE_MERCHANTS,
  SET_MERCHANTS_ERROR
} from "../actions/merchants";

const merchants = (
  state = { data: [], isFetching: false, error: false },
  action
) => {
  switch (action.type) {
    case REQUEST_MERCHANTS:
      return { ...state, isFetching: true, error: false };
    case RECEIVE_MERCHANTS:
      return {
        ...state,
        isFetching: false,
        data: [...action.payload.merchants]
      };
    case SET_MERCHANTS_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default merchants;
