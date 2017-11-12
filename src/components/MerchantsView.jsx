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
    const { merchants, pagesCount, deleteMerchant } = this.props;

    return (
      <div>
        <ul>
          {merchants.map(merchant => (
            <li key={merchant.id}>
              <Link to={`/merchants/${merchant.id}`}>
                {merchant.firstname}
              </Link>{" "}
              <Link to={`/merchants/${merchant.id}/edit`}>edit</Link>{" "}
              <button
                onClick={event => {
                  deleteMerchant(merchant.id);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <Pager pagesCount={pagesCount} />
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
