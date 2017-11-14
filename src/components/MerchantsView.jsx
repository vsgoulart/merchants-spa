import "../styles/MerchantsView.scss";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pager from "./Pager";
import EditIcon from "./EditIcon";
import RemoveIcon from "./RemoveIcon";
import PremiumIcon from "./PremiumIcon";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

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
    const { merchants, pagesCount, deleteMerchant, currentPage } = this.props;

    return (
      <div className="MerchantsView">
        <ul>
          {merchants.map(merchant => (
            <MerchantItem
              key={merchant.id}
              merchant={merchant}
              deleteHandler={() => {
                deleteMerchant(merchant.id);
              }}
            />
          ))}
        </ul>
        <Pager pagesCount={pagesCount} currentPage={currentPage} />
      </div>
    );
  }

  renderLoading() {
    return <LoadingSpinner />;
  }

  renderError() {
    return <ErrorMessage />;
  }
}

const MerchantItem = ({ merchant, deleteHandler }) => (
  <li className="MerchantItem">
    <Link to={`/merchants/${merchant.id}/`}>
      <div className="merchant">
        <img src={merchant.avatarUrl} alt="" />
        <div className="data-container">
          <h3>
            {`${merchant.firstname} ${merchant.lastname}`}
            {merchant.hasPremium ? <PremiumIcon /> : null}
          </h3>
          <span>{merchant.email}</span>
          <span>+{merchant.phone}</span>
          <span>{merchant.bids.length} bids</span>
        </div>
      </div>
    </Link>
    <div className="control">
      <Link to={`/merchants/${merchant.id}/edit`} className="edit-button">
        <EditIcon /> edit
      </Link>{" "}
      <a
        onClick={event => {
          event.preventDefault();

          if (
            window.confirm("Are you sure you want to remove this merchant?")
          ) {
            deleteHandler();
          }
        }}
        className="remove-button"
      >
        <RemoveIcon /> remove
      </a>
    </div>
  </li>
);

export default MerchantsView;
