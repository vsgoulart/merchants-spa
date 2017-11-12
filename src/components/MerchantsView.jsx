import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pager from "./Pager";

class MerchantsView extends Component {
  render() {
    const { loading, error } = this.props;

    if (error) {
      return this.renderError();
    } else if (loading) {
      return this.renderLoading();
    } else {
      return this.renderMerchants();
    }
  }

  renderMerchants() {
    const { merchants, lastPage } = this.props;

    return (
      <div>
        <ul>
          {merchants.map(merchant => (
            <li key={merchant.id}>
              <Link to={`/merchants/${merchant.id}`}>{merchant.firstname}</Link>
            </li>
          ))}
        </ul>
        <Pager lastPage={lastPage} />
      </div>
    );
  }

  renderLoading() {
    return <h1>loading</h1>;
  }

  renderError() {
    const { error } = this.props;

    return <h1>{error}</h1>;
  }
}

export default MerchantsView;
