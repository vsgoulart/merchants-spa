import reducer from "./merchants";
import * as actions from "../actions/merchants";

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
    const merchants = [
      {
        id: 1,
        firstname: "Charo",
        lastname: "Lockey",
        avatarUrl: "https://robohash.org/sedvitaeculpa.jpg?size=50x50&set=set1",
        email: "clockey0@free.fr",
        phone: "9534745812",
        hasPremium: true,
        bids: []
      }
    ];
    const actual = reducer(undefined, actions.receiveMerchants(merchants));
    const expected = merchants;

    expect(actual).toHaveProperty("data", expected);
  });
});
