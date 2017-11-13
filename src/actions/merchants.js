import {
  listMerchants,
  getMerchant,
  deleteMerchant as deleteMerchantOnAPI,
  createMerchant as createMerchantOnAPI,
  updateMerchant as updateMerchantOnAPI
} from "../utils/api";

export const REQUEST_MERCHANTS = "REQUEST_MERCHANTS";
export const RECEIVE_MERCHANTS = "RECEIVE_MERCHANTS";
export const RECEIVE_MERCHANT = "RECEIVE_MERCHANT";
export const SET_MERCHANTS_ERROR = "SET_MERCHANTS_ERROR";
export const DELETE_MERCHANT = "DELETE_MERCHANT";
export const CREATE_MERCHANT = "CREATE_MERCHANT";
export const UPDATE_MERCHANT = "UPDATE_MERCHANT";

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

export const fetchMerchants = () => dispatch => {
  dispatch(requestMerchants());

  return listMerchants()
    .then(response => {
      //On a real project errors sent from the API should also be checked here and act accordingly

      dispatch(receiveMerchants(response.result));
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
      dispatch(receiveMerchant(response.result));
    })
    .catch(error => {
      console.log(error);
      dispatch(setMerchantsError(error));
    });
};

export const deleteMerchant = merchant => ({
  type: DELETE_MERCHANT,
  payload: { merchant }
});

export const fetchDeleteMerchant = id => dispatch => {
  return deleteMerchantOnAPI(id)
    .then(response => {
      dispatch(deleteMerchant(response.result));
    })
    .catch(error => {
      console.log(error);
      dispatch(setMerchantsError(error));
    });
};

export const createMerchant = merchant => ({
  type: CREATE_MERCHANT,
  payload: { merchant }
});

export const fetchCreateMerchant = merchant => dispatch => {
  dispatch(requestMerchants());

  return createMerchantOnAPI(merchant)
    .then(response => {
      dispatch(createMerchant(response.result));
    })
    .catch(error => {
      console.log(error);
      dispatch(setMerchantsError(error));
    });
};

export const updateMerchant = merchant => ({
  type: UPDATE_MERCHANT,
  payload: { merchant }
});

export const fetchUpdateMerchant = merchant => dispatch => {
  dispatch(requestMerchants());

  return updateMerchantOnAPI(merchant)
    .then(response => {
      dispatch(updateMerchant(response.result));
    })
    .catch(error => {
      console.log(error);
      dispatch(setMerchantsError(error));
    });
};
