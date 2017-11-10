import * as actions from "./merchants";

describe("merchants actions", () => {
  it("should create an action to signal a merchants' request", () => {
    const actual = actions.requestMerchants();
    const expected = { type: actions.REQUEST_MERCHANTS };

    expect(actual).toEqual(expected);
  });

  it("should create an action to receive the merchants' data", () => {
    const actual = actions.receiveMerchants([]);
    const expected = {
      type: actions.RECEIVE_MERCHANTS,
      payload: { merchants: [] }
    };

    expect(actual).toEqual(expected);
  });

  it("should create an action to set the merchants' error", () => {
    const error = new Error("test error");
    const actual = actions.setMerchantsError(error);
    const expected = { type: actions.SET_MERCHANTS_ERROR, payload: { error } };

    expect(actual).toEqual(expected);
  });
});
