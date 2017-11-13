import "../styles/MerchantView.scss";

import React, { Component } from "react";

import BackIcon from "../components/BackIcon";
import PremiumIcon from "../components/PremiumIcon";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

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
    const { goBack } = this.props.history;

    return (
      <div className="MerchantView">
        <div className="merchant-data">
          <a
            onClick={event => {
              event.preventDefault();
              goBack();
            }}
            className="back-button"
          >
            <BackIcon />
            Back
          </a>
          <img src={merchant.avatarUrl} alt="" />
          <h3>
            {`${merchant.firstname} ${merchant.lastname}`}
            {merchant.hasPremium ? <PremiumIcon /> : null}
          </h3>
          <span>{merchant.email}</span>
          <span>+{merchant.phone}</span>
        </div>
        <div className="bids">
          {merchant.bids.length ? (
            merchant.bids.map(bid => <Bid key={bid.id} bid={bid} />)
          ) : (
            <h2>This merchant has no bids</h2>
          )}
        </div>
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

const Bid = ({ bid }) => (
  <div className="bid">
    <span>
      <h4>{bid.carTitle}</h4> / {formStringToCurrency(bid.amount)} /{" "}
      {formatDate(bid.created)}
    </span>
  </div>
);

const formStringToCurrency = string => "€ " + string.toLocaleString("en-GB");

const formatDate = UTCDate => new Date(UTCDate).toLocaleDateString("en-GB");

export default MerchantView;
