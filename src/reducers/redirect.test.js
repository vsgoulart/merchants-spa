import reducer from "./redirect";
import * as actions from "../actions/redirect";

describe("redirect reducer", () => {
  it(`should return true when ${actions.REDIRECT} is dispatched`, () => {
    const actual = reducer(undefined, actions.redirect());
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it(`should return false when ${actions.RESET_REDIRECT} is dispatched`, () => {
    const actual = reducer(undefined, actions.resetRedirect());
    const expected = false;

    expect(actual).toEqual(expected);
  });
});
