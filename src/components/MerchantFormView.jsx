import React, { Component } from "react";
import { Field } from "redux-form";

class MerchantFormView extends Component {
  render() {
    const { loading, error } = this.props;

    if (error) {
      return this.renderError();
    } else if (loading) {
      return this.renderLoading();
    } else {
      return this.renderForm();
    }
  }

  renderForm() {
    const { handleSubmit, save } = this.props;

    return (
      <form onSubmit={handleSubmit(save)}>
        <label htmlFor="firstname">
          First name
          <Field
            name="firstname"
            id="firstname"
            component="input"
            type="text"
            required
          />
        </label>
        <label htmlFor="lastname">
          Last name
          <Field
            name="lastname"
            id="lastname"
            component="input"
            type="text"
            required
          />
        </label>
        <label htmlFor="avatarUrl">
          Avatar URL
          <Field name="avatarUrl" id="avatarUrl" component="input" type="url" />
        </label>
        <label htmlFor="email">
          Email
          <Field
            name="email"
            id="email"
            component="input"
            type="email"
            required
          />
        </label>
        <label htmlFor="phone">
          Phone
          <Field name="phone" id="phone" component="input" type="tel" />
        </label>
        <label htmlFor="hasPremium">
          <Field
            name="hasPremium"
            id="hasPremium"
            component="input"
            type="checkbox"
          />
          Has premium
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }

  renderLoading() {
    return <h1>loading</h1>;
  }

  renderError() {
    return <h1>error</h1>;
  }
}

export default MerchantFormView;
