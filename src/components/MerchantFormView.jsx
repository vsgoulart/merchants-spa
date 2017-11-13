import "../styles/MerchantFormView.scss";

import React, { Component } from "react";
import { Field } from "redux-form";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

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
      <div className="MerchantFormView">
        <form onSubmit={handleSubmit(save)}>
          <div className="names">
            <Field
              name="firstname"
              id="firstname"
              component="input"
              type="text"
              placeholder="First name"
              required
            />
            <Field
              name="lastname"
              id="lastname"
              component="input"
              type="text"
              placeholder="Last name"
              required
            />
          </div>
          <Field
            name="email"
            id="email"
            component="input"
            type="email"
            placeholder="Email"
            required
          />
          <Field
            name="phone"
            id="phone"
            component="input"
            type="tel"
            placeholder="Phone"
          />
          <Field
            name="avatarUrl"
            id="avatarUrl"
            component="input"
            placeholder="Avatar URL"
            type="url"
          />
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
      </div>
    );
  }

  renderLoading() {
    return <LoadingSpinner />;
  }

  renderError() {
    return <ErrorMessage backToHome />;
  }
}

export default MerchantFormView;
