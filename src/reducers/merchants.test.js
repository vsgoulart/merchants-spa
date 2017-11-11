import reducer from "./merchants";
import * as actions from "../actions/merchants";

const merchant = {
  id: 1,
  firstname: "Charo",
  lastname: "Lockey",
  avatarUrl: "https://robohash.org/sedvitaeculpa.jpg?size=50x50&set=set1",
  email: "clockey0@free.fr",
  phone: "9534745812",
  hasPremium: true,
  bids: []
};

describe("merchants reducer", () => {
  it(`should set isFetching to true when ${actions.REQUEST_MERCHANTS} is dispatched`, () => {
    const actual = reducer(undefined, actions.requestMerchants());
    const expected = true;

    expect(actual).toHaveProperty("isFetching", expected);
  });

  it(`should set error to the passed error when ${actions.SET_MERCHANTS_ERROR} is dispatched`, () => {
    const error = new Error("test error");
    const actual = reducer(undefined, actions.setMerchantsError(error));
    const expected = error;

    expect(actual).toHaveProperty("error", expected);
  });

  it(`should set data with the passed merchants when ${actions.RECEIVE_MERCHANTS} is dispatched`, () => {
    const actual = reducer(undefined, actions.receiveMerchants([merchant]));
    const expected = {
      [merchant.id]: merchant
    };

    expect(actual).toHaveProperty("data", expected);
  });

  it(`should add a merchant to the data property when ${actions.RECEIVE_MERCHANT} is dispatched`, () => {
    const actual = reducer(undefined, actions.receiveMerchant(merchant));
    const expected = {
      [merchant.id]: merchant
    };

    expect(actual).toHaveProperty("data", expected);
  });
});
