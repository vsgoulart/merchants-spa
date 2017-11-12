import {
  REQUEST_MERCHANTS,
  RECEIVE_MERCHANTS,
  RECEIVE_MERCHANT,
  SET_MERCHANTS_ERROR
} from "../actions/merchants";

const merchants = (
  state = { data: {}, lastPage: 0, isFetching: false, error: false },
  action
) => {
  switch (action.type) {
    case REQUEST_MERCHANTS:
      return { ...state, isFetching: true, error: false };
    case RECEIVE_MERCHANTS:
      const { merchants, lastPage } = action.payload;
      return {
        ...state,
        isFetching: false,
        data: merchants.reduce(
          (merchants, merchant) => ({
            ...merchants,
            [merchant.id]: { ...merchant }
          }),
          {}
        ),
        lastPage
      };
    case RECEIVE_MERCHANT:
      const { merchant } = action.payload;
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          [merchant.id]: { ...merchant }
        }
      };
    case SET_MERCHANTS_ERROR:
      return { ...state, error: action.payload.error, isFetching: false };
    default:
      return state;
  }
};

export default merchants;
