import React, { Component } from "react";

class MerchantView extends Component {
  render() {
    const { loading, error } = this.props;

    if (error) {
      return this.renderError();
    } else if (loading) {
      return this.renderLoading();
    } else {
      return this.renderMerchant();
    }
  }

  renderMerchant() {
    const { merchant } = this.props;

    return <h1>{JSON.stringify(merchant)}</h1>;
  }

  renderLoading() {
    return <h1>loading</h1>;
  }

  renderError() {
    const { error } = this.props;

    return <h1>{error}</h1>;
  }
}

export default MerchantView;
