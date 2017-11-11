import { listMerchants, getMerchant } from "../utils/api";

export const REQUEST_MERCHANTS = "REQUEST_MERCHANTS";
export const RECEIVE_MERCHANTS = "RECEIVE_MERCHANTS";
export const RECEIVE_MERCHANT = "RECEIVE_MERCHANT";
export const SET_MERCHANTS_ERROR = "SET_MERCHANTS_ERROR";

export const requestMerchants = () => ({ type: REQUEST_MERCHANTS });

export const receiveMerchants = merchants => ({
  type: RECEIVE_MERCHANTS,
  payload: { merchants }
});

export const receiveMerchant = merchant => ({
  type: RECEIVE_MERCHANT,
  payload: { merchant }
});

export const setMerchantsError = error => ({
  type: SET_MERCHANTS_ERROR,
  payload: { error }
});

export const fetchMerchants = pagination => dispatch => {
  dispatch(requestMerchants());

  return listMerchants(pagination)
    .then(response => {
      //On a real project errors sent from the API should also be checked here and act accordingly

      dispatch(receiveMerchants(response));
    })
    .catch(error => {
      console.log(error);
      dispatch(setMerchantsError(error));
    });
};

export const fetchMerchant = id => dispatch => {
  dispatch(requestMerchants());

  return getMerchant(id)
    .then(response => {
      dispatch(receiveMerchant(response));
    })
    .catch(error => {
      console.log(error);
      dispatch(setMerchantsError(error));
    });
};
