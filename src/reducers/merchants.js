import {
  REQUEST_MERCHANTS,
  RECEIVE_MERCHANTS,
  RECEIVE_MERCHANT,
  SET_MERCHANTS_ERROR,
  DELETE_MERCHANT
} from "../actions/merchants";

const merchants = (
  state = { data: {}, lastPage: 0, isFetching: false, error: false },
  action
) => {
  switch (action.type) {
    case REQUEST_MERCHANTS:
      return { ...state, isFetching: true, error: false };
    case RECEIVE_MERCHANTS:
      const { merchants } = action.payload;

      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          ...merchants.reduce(
            (merchants, merchant) => ({
              ...merchants,
              [merchant.id]: { ...merchant }
            }),
            {}
          )
        }
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
    case DELETE_MERCHANT:
      return {
        ...state,
        data: Object.keys(state.data).reduce((merchants, id) => {
          if (id != action.payload.merchant.id) {
            return { ...merchants, [id]: { ...state.data[id] } };
          } else {
            return merchants;
          }
        }, {})
      };
    default:
      return state;
  }
};

export default merchants;
