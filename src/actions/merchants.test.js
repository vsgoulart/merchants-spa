import * as actions from "./merchants";

describe("merchants actions", () => {
  it("should create an action to signal a merchants' request", () => {
    const actual = actions.requestMerchants();
    const expected = { type: actions.REQUEST_MERCHANTS };

    expect(actual).toEqual(expected);
  });

  it("should create an action to receive the merchants' data", () => {
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
    const actual = actions.receiveMerchants(merchants, 1);
    const expected = {
      type: actions.RECEIVE_MERCHANTS,
      payload: { merchants, lastPage: 1 }
    };

    expect(actual).toEqual(expected);
  });

  it("should create an action to set the merchants' error", () => {
    const error = new Error("test error");
    const actual = actions.setMerchantsError(error);
    const expected = { type: actions.SET_MERCHANTS_ERROR, payload: { error } };

    expect(actual).toEqual(expected);
  });

  it("should create an action to receive a merchant data", () => {
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
    const actual = actions.receiveMerchant(merchant);
    const expected = { type: actions.RECEIVE_MERCHANT, payload: { merchant } };

    expect(actual).toEqual(expected);
  });
});
