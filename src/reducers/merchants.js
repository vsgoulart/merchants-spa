import {
  REQUEST_MERCHANTS,
  RECEIVE_MERCHANTS,
  RECEIVE_MERCHANT,
  SET_MERCHANTS_ERROR,
  DELETE_MERCHANT,
  CREATE_MERCHANT,
  UPDATE_MERCHANT,
  RESET_MERCHANTS_ERROR
} from "../actions/merchants";

const merchants = (
  state = { data: {}, lastPage: 0, isFetching: false, error: false },
  action
) => {
  const merchants = state.data;
  const merchantsKeys = Object.keys(state.data);

  switch (action.type) {
    case REQUEST_MERCHANTS:
      return { ...state, isFetching: true, error: false };
    case RECEIVE_MERCHANTS:
      const newMerchants = action.payload.merchants;

      return {
        ...state,
        isFetching: false,
        data: {
          ...newMerchants.reduce(
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
      const deletedMerchant = action.payload.merchant;

      return {
        ...state,
        data: merchantsKeys.reduce((updatedMerchants, id) => {
          if (Number(id) !== deletedMerchant.id) {
            return { ...updatedMerchants, [id]: { ...merchants[id] } };
          } else {
            return updatedMerchants;
          }
        }, {})
      };
    case CREATE_MERCHANT:
      const newMerchant = action.payload.merchant;

      return {
        ...state,
        isFetching: false,
        data: { ...merchants, [newMerchant.id]: { ...newMerchant } }
      };
    case UPDATE_MERCHANT:
      const updatedMerchant = action.payload.merchant;

      return {
        ...state,
        isFetching: false,
        data: { ...merchants, [updatedMerchant.id]: { ...updatedMerchant } }
      };
    case RESET_MERCHANTS_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};

export default merchants;
